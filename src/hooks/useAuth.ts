import { useEffect, useState } from "react"
import { login, register } from "../lib/api";

export default function useAuth(){
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
        
        try{
            await register(input);
            alert('회원가입 완료')
        } catch(e){
            console.log(e);
            
        }
    }

    const onClickLogin = async() => {
        try{
            console.log(input);
            const response = await login(input);
            console.log(response.data.jwt);
            
            //location.href = '/';
        } catch(e){
            console.log(e);
            
        }
    }

    const onClickLoginStep = () => {
        setIsRegister(false);
    }

    const onClickRegisterStep = () => {
        setIsRegister(true);
    }

    return {onChangeInput, onClickRegister, labelText, onClickLoginStep, onClickRegisterStep, isRegister, onClickLogin}
}