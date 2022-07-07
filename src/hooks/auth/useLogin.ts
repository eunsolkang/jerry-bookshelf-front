import { useEffect, useState } from "react"
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import authApi from "../../lib/api/auth";
import { RequestLogin, ResponseLogin } from "../../types/auth";

export default function useLogin(){
    const [input, setInput] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [labelText, setLabelText] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [isRegister, setIsRegister] = useState<boolean>(true);
    const loginMutation = useMutation((reqestLogin: RequestLogin) => authApi.login(reqestLogin));
    const history = useHistory();

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setInput({
            ...input,
            [name] : value
        });
    }

    const onClickRegister = async() => {
        const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        const isEmail = regExp.test(input.email);
        const isPasswordValid = input.password.length >= 8;

        if ( !isEmail ){
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
        
    }

    const onClickLogin = async() => {
        const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        const isEmail = regExp.test(input.email);

        if ( !isEmail ){
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
                console.log('여기가 실행되는거임?');
                history.push('/');
            }
        })
    }

    const onClickLoginStep = () => {
        setIsRegister(false);
    }

    const onClickRegisterStep = () => {
        setIsRegister(true);
    }

    return {onChangeInput, onClickRegister, labelText, onClickLoginStep, onClickRegisterStep, isRegister, onClickLogin, loginMutation}
}