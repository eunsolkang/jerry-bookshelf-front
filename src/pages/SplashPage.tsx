import React from 'react';
import styled from 'styled-components';
import Intro from '../components/book/Intro';

const SplashStyled = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to bottom right, #FFC30B, #FFD75B);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .google-login{
        margin: 50px 80px;
        display: flex;
        align-items: center;
        width:100%;
        padding-top: .75rem;
        padding-bottom: .75rem;
        box-sizing: border-box;
        border-radius: 8px;
        border: 1px solid rgb(214, 214, 214);
        padding-left: 1rem;
        margin-top: 1rem;
        cursor: pointer;
        background-color: rgb(252, 252, 252);
        color: ${({theme})=>theme.colors.text};
        img{
          margin-right: 1rem;
          width: 25px;
        }
      }
`

const SplashPage = () => {
    return (
        <SplashStyled>
            <img src='logo-jerrybook-splash.svg' alt='logo'></img>
            <div className='google-login'>
                <img src='icon/google.png'/>
                구글계정으로 로그인하기
            </div>
        </SplashStyled>
    );
};

export default SplashPage;