import styled from "styled-components";
import Input from "../common/Input";
import AuthBackground from "./AuthBackground";
import Button from "../common/Button";
import useLogin from "../../hooks/auth/useLogin";
import queryString from "query-string";
import {Link, useLocation} from "react-router-dom";

const S = {
    title: styled.div`
        text-align: left;
        font-size: 1.25rem;
        color: ${({theme})=>theme.colors.text};
        font-weight: bold;
        margin-bottom: 1.5rem;
    `
}
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
      
      font-weight: bold;
      font-size: 3.8rem;
      line-height: 78px;
      color: rgba(255, 255, 255, 0.5);
      span{
        color: rgba(255, 255, 255, 0.8);
      }
      .author{
        text-align: end;
      }
    }
    .auth-box{
      border-radius: 8px;
      min-width: 320px;
      background-color: white;
      padding: 2.5rem;
      margin-left: 0.4rem;
      & > .input + .input {
        margin-top: .9rem;
      }
      & > .button{
        margin-top: .9rem;
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
          color: ${({theme})=>theme.colors.primary};
        }
      }
      .google-login{
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
    }
  }
`
const AuthForm = () => {
    const location = useLocation();
    const authType = queryString.parse(location.search).authType;
    console.log(authType);
    const {onChangeInput, onClickRegister, onClickLogin, labelText,loginMutation} = useLogin();

    const registerForm = (
      <div className={'auth-box'}>
          <S.title>
              제리책방 회원가입
          </S.title>
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
            구글계정으로 회원가입
        </div>
        <div className='info-login'>
            이미 계정이 있다면, <Link to={'?authType=login'} className='link-login'>로그인</Link>
        </div>
      </div>
    )

    const loginForm = (
      <div className={'auth-box'}>
          <S.title>
              제리책방 로그인
          </S.title>
        <Input placeholder='이메일 입력' onChange={onChangeInput} name='email' labelText={labelText.email}></Input>
        <Input placeholder='비밀번호 입력' onChange={onChangeInput} name='password' type='password' labelText={loginMutation.isError ? "비밀번호를 확인해주세요": ""}></Input>
        <Button fullWidth onClick={onClickLogin}>로그인</Button>
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
            아직 회원이아니신가요?, <Link to={'?authType=register'} className='link-login'>회원가입</Link>
        </div>
      </div>
    )

    const verifiedEmailForm = (
        <div className={'auth-box'}>
            <S.title>
                이메일 인증
            </S.title>
            <Input placeholder='인증 코드 입력' onChange={onChangeInput} name='verifiedCode' labelText={labelText.verifiedEmail}></Input>
            <Button fullWidth onClick={onClickLogin}>이메일 인증</Button>
        </div>
    )

    const getAuthBox = () =>{
        if (authType === 'login'){
            return loginForm;
        }else if(authType === 'register'){
            return registerForm;
        } else {
            return verifiedEmailForm;
        }
    }
    return (
        <StyledAuthFrom>
            <div className={'cover'}>
                <div className={'side-title'}>
                    <span>좋은책을 읽는다는 것은<br/>과거의 가장 훌륭한 사람들과 대화하는 것이다</span>
                    <div className='author'>
                                    -데카르트
                    </div>
                </div>
                {
                    getAuthBox()
                }
            </div>
            <AuthBackground></AuthBackground>
        </StyledAuthFrom>
    );
};

export default AuthForm;