import { useEffect, useState } from "react"
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import authApi from "../../lib/api/auth";
import {RequestLogin, RequestRegister, ResponseLogin} from "../../types/auth";

export default function useLogin(){
    const [input, setInput] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [labelText, setLabelText] = useState({
        name: '',
        email: '',
        password: '',
        verifiedEmail: ''
    });
    const loginMutation = useMutation((requestLogin: RequestLogin) => authApi.login(requestLogin));
    const registerMutation = useMutation((requestRegister: RequestRegister) => authApi.register(requestRegister));
    const history = useHistory();

    const isEmail = (email: string) => {
        const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        return regExp.test(email);
    }

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setInput({
            ...input,
            [name] : value
        });

        console.log(input)
    }

    const onClickRegister = async() => {
        const isPasswordValid = input.password.length >= 8;

        if ( !isEmail(input.email) ){
            setLabelText(prevState => {
                return {
                    ...prevState,
                    email: "올바른 이메일 형식이 아닙니다."
                }
            });
        }
        if ( !isPasswordValid ){
            setLabelText(prevState => {
                return {
                    ...prevState,
                    password: "비밀번호는 8자리 이상이어야합니다."
                }
            });
        }

        registerMutation.mutate(input, {
            onSuccess: (response) => {
                history.push('?authType=email');
            }
        });
        
    }

    const onClickLogin = async() => {
        if ( !isEmail(input.email) ){
            setLabelText(prevState => {
                return {
                    ...prevState,
                    email: "올바른 이메일 형식이 아닙니다."
                }
            });

            return;
        }

        loginMutation.mutate(input, {
            onSuccess: (response: ResponseLogin) => {
                localStorage.setItem('jwt', response.jwt);
                localStorage.setItem('loggedin', 'true');
                history.push('/');
            }
        })
    }

    return {onChangeInput, onClickRegister, labelText, onClickLogin, loginMutation}
}