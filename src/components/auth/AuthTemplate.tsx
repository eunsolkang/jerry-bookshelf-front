import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const AuthTemplateBlock = styled.div`
    position : absolute;
    left:0;
    top : 0;
    right : 0;
    bottom : 0;
    background: ${palette.gray[2]};
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`;

const WhiteBox = styled.div`
    .logo-area{
        display : block;
        padding-bottom : 0rem;
        text-align : center;
        font-weight : bold;
        letter-spacing : 2px;
    }
    box-shadow : 0 0 8px rgb(0, 0, 0, 0.025);
    padding : 2rem;
    width : 300px;
    background : white;
    border-radius : 2px;
`;

const AuthTemplate:React.FC<any>  = ({ children }) => {
    return (
        <AuthTemplateBlock>
            <WhiteBox>
                <div className="logo-area">
                    <h3>로그인</h3>
                </div>
                {children}
            </WhiteBox>
        </AuthTemplateBlock>
    );
};

export default AuthTemplate;