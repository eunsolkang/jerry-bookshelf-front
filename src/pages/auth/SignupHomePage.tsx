import styled from "styled-components";
import ProgressBar from "components/common/ProgressBar";
import TextHeader from "components/common/TextHeader";
import Wrapper from "components/common/Wrapper";
import theme from "lib/styles/theme";
import TextDescription from "components/common/TextDescription";
import Label from "components/common/Label";
import Button from "components/common/Button";


const SignupHomeStyled = styled.div`
    background-color: ${theme.colors.background};
    height: 100vh;
    header {
        background-color: white;
        display: flex;
        flex-direction: column;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 35px;
        .progress-bar{
            margin-bottom: 30px;
            margin-top: 10px;
        }
        .skip-button-box{
            display: flex;
            justify-content: flex-end;
        }
        .skip-button{
            color: ${theme.colors.subtitle};
            font-size: 14px;
        }
        .text-description{
            margin-top: 8px;
            margin-left: 15px;
        }
    }

    .link-box{
        margin: 40px 20px 8px 20px;
        background-color: white;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: .25rem 1rem;
        border-radius: 48px;
        font-size: 16px;
        img{
            width: 24px;
            height: 24px;
            margin-right: .5rem;
        }
        input{
            width: 30%;
            outline: none;
            border: none;
            font-size: 16px;
            font-weight: bold;
        }
    }
    .label{
        margin-left: 32px;
    }
    .bottom-button{
        padding: 20px;
        box-sizing: border-box;
        width: 100%;
        position: absolute;
        bottom: 0;
    }
`;

const SignupHomePage = () => {
    return (
        <Wrapper>
            <SignupHomeStyled>
                <header>
                    <ProgressBar value={50}></ProgressBar>
                    <TextHeader>
                        책방을 만들어볼까요?
                    </TextHeader>
                    <TextDescription>
                        소중한 지식을 보관할 링크를 생성해주세요.
                    </TextDescription>
                </header>
                <div className='link-box'>
                    <img className='logo' src='/icon/logo-jerrybook-main.svg' alt='logo'></img>
                    jerrybook.app/<input autoFocus></input>
                </div>
                <Label type="info">내 정보는 나중에도 입력할 수 있어요</Label>
                <div className="bottom-button">
                    <Button fullWidth>책방 만들기</Button>
                </div>
            </SignupHomeStyled>
        </Wrapper>
    )
}

export default SignupHomePage;