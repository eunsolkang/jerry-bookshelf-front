import styled from "styled-components";
import Input from "../common/Input";
import AuthBackground from "./AuthBackground";
import Button from "../common/Button";
import useAuth from "../../hooks/useAuth";

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
      & > .title {
        text-align: center;
        font-size: 1.25rem;
        color: ${({theme})=>theme.colors.text};
        font-weight: bold;
        margin-bottom: 1.5rem;
      }
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
    const {onChangeInput, onClickRegister,onClickLogin, labelText, isRegister, onClickLoginStep, onClickRegisterStep} = useAuth();

    const registerForm = (
      <div className={'auth-box'}>
        <div className={'title'}>
            제리책방 초대장 신청
        </div>
        <Input placeholder='이름 입력' onChange={onChangeInput} name='name'></Input>
        <Input placeholder='이메일 입력' onChange={onChangeInput} name='email' labelText={labelText.email}></Input>
        <Input placeholder='비밀번호 입력' onChange={onChangeInput} name='password' type='password' labelText={labelText.password}></Input>
        <Button fullWidth onClick={onClickRegister}>초대장 받기</Button>
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
            이미 계정이 있다면, <span onClick={onClickLoginStep} className='link-login'>로그인</span>
        </div>
      </div>
    )

    const loginForm = (
      <div className={'auth-box'}>
        <div className={'title'}>
            제리책방 로그인
        </div>
        <Input placeholder='이메일 입력' onChange={onChangeInput} name='email' labelText={labelText.email}></Input>
        <Input placeholder='비밀번호 입력' onChange={onChangeInput} name='password' type='password' labelText={labelText.password}></Input>
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
            아직 초대장이 없으신가요?, <span onClick={onClickRegisterStep} className='link-login'>초대장 받기</span>
        </div>
      </div>
    )
    return (
        <StyledAuthFrom>
            <div className={'cover'}>
                <div className={'side-title'}>
                    <span>좋은책을 읽는다는 것은 <br/>과거의 가장 훌륭한 사람들과 대화하는 것이다</span>
                    <div className='author'>
                    -데카르트
                    </div>
                </div>
                {isRegister ? registerForm : loginForm}
            </div>
            <AuthBackground></AuthBackground>
        </StyledAuthFrom>
    );
};

export default AuthForm;