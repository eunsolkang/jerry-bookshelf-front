import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette'
import Button from '../common/Button';

const AuthFormBlock = styled.div`
    h3{
        margin : 0;
        color : ${palette.gray[8]};
        margin-bottom : 1rem;
    }
`;

const StyledInput = styled.input`
    font-size : 1rem;
    border : none;
    border-bottom : 1px solid ${palette.gray[5]};
    padding-bottom : 0.65rem;
    outline : none;
    width: 100%;
    &:focus{
        border-bottom : 1px solid ${palette.gray[7]};
    }
    &:first-child{
        margin-top : .25rem;
    }
    & + &{
        margin-top : 1rem;
    }
`;

export const ButtonWithMarginTop = styled(Button)`
    padding-top : 1rem;
    padding-bottom : 1rem;
    margin-top : 1rem;
    font-size : 0.925rem;
`;

const Footer = styled.div`
    font-size : .8rem;
    /* margin-top : 2rem; */
    text-align : right;
    a{
        color : ${palette.gray[6]};
        text-decoration : underline;
        &:hover{
            color : ${palette.gray[9]};
        }
    }
`
const ErrorMessage = styled.div`
    color : red;
    text-align : center;
    font-size : 0.875rem;
    margin-top : 1rem;
`

const AuthForm:React.FC<any>  = () => {


    return (
        <AuthFormBlock>
            <div>
                <StyledInput
                    placeholder="아이디"
                ></StyledInput>
                <StyledInput
                    placeholder="비밀번호"
                    type="password"
                ></StyledInput>
                {/* {
                    authError && (
                        <ErrorMessage>애러 발생!</ErrorMessage>
                    )
                } */}
                
                <ButtonWithMarginTop cyan fullWidth type="submit">로그인</ButtonWithMarginTop>
                
            </div>

            <Footer>
            </Footer>
        </AuthFormBlock>
    )
}

export default AuthForm;