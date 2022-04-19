import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import MainComponent from "../book/MainComponent";
import Input from "../common/Input";
import AuthBackground from "./AuthBackground";
import Button from "../common/Button";
import useAuth from "../../hooks/useAuth";
import palette from "../../lib/styles/palette";

const StyledAuthFrom = styled.div`
  width: 100vw;
  height: 100vh;
  .cover{
    z-index: 100;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .7);
    box-sizing: border-box;
    padding: 8rem;
    .side-title{
      font-size: 4rem;
      color: white;
    }
    .auth-box{
      border-radius: 4px;
      width: 320px;
      background-color: white;
      padding: 2.5rem;
      & > .title {
        font-size: 1.25rem;
        color: ${palette.primary};
        font-weight: bold;
        margin-bottom: 1.5rem;
      }
      & > .input + .input {
        margin-top: 1rem;
      }
      & > .button{
        margin-top: 1rem;
      }
      .box-line{
        display: flex;
        align-items: center;
        white-space:nowrap;
        margin-top: 1rem;
        .text{
          margin-left: .5rem;
          margin-right: .5rem;
          color: rgb(114, 114, 114);
          font-size: .75rem;
        }
        .line{
          width: 100%;
          height: 1px;
          background-color: rgb(214, 214, 214);
        }
      }
      .info-login{
        margin-top: 1rem;
        font-size: .9rem;
        text-align: right;
        .link-login{
          font-weight: bold;
          cursor: pointer;
          color: #34bf0d;
        }
      }
      .google-login{
        display: flex;
        align-items: center;
        width:100%;
        padding-top: .75rem;
        padding-bottom: .75rem;
        box-sizing: border-box;
        border-radius: 4px;
        border: 1px solid rgb(214, 214, 214);
        padding-left: 1rem;
        margin-top: 1rem;
        cursor: pointer;
        background-color: rgb(252, 252, 252);
        color: ${palette.primary};
        img{
          margin-right: 1rem;
          width: 25px;
        }
      }
    }
  }
`
const AuthForm = () => {
    const {onChangeInput, onClickRegister, labelText} = useAuth();

    return (
        <StyledAuthFrom>
            <div className={'cover'}>
                <div className={'side-title'}>
                    <div>지금 회원가입해서</div>
                    <b>1,253</b> 개가 넘는 책들과 독후감을
                    <div>확인하세요</div>
                </div>
                <div className={'auth-box'}>
                    <div className={'title'}>
                        제리책방 회원가입
                    </div>
                    <Input placeholder='이름 입력' onChange={onChangeInput} name='name'></Input>
                    <Input placeholder='이메일 입력' onChange={onChangeInput} name='email' labelText={labelText.email}></Input>
                    <Input placeholder='비밀번호 입력' onChange={onChangeInput} name='password' type='password' labelText={labelText.password}></Input>
                    <Button fullWidth onClick={onClickRegister}>회원가입</Button>
                    <div className='box-line'>
                        <div className='line'></div>
                        <div className='text'>
                            또는
                        </div>
                        <div className='line'></div>
                    </div>
                    <div className='google-login'>
                        <img src='icon/google.png'/>
                        구글계정으로 로그인하기
                    </div>
                    <div className='info-login'>
                        이미 계정이 있다면, <span className='link-login'>로그인</span>
                    </div>
                </div>
            </div>
            <AuthBackground></AuthBackground>
        </StyledAuthFrom>
    );
};

export default AuthForm;