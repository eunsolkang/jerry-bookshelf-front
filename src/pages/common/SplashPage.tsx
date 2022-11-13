import React from 'react';
import styled from 'styled-components';
import GoogleLoginButton from '../../components/common/GoogleLoginButton';

const SplashStyled = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to bottom right, #FFC30B, #FFD75B);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    .splash-logo{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100%;
    }
    .google-login-button-box{
        width: 100%;
        padding-left: 80px;
        padding-right: 80px;
        box-sizing: border-box;
        margin-bottom: 50px;
    }
`

const SplashPage = () => {
    return (
        <SplashStyled>
            <div className='splash-logo'>
                <img src='logo-jerrybook-splash.svg' alt='logo'></img>
            </div>
            <div className='google-login-button-box'>
                    <GoogleLoginButton></GoogleLoginButton>
            </div>
        </SplashStyled>
    );
};

export default SplashPage;