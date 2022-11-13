import styled from "styled-components";
import ProgressBar from "components/common/ProgressBar";
import TextHeader from "components/common/TextHeader";
import Wrapper from "components/common/Wrapper";
import theme from "lib/styles/theme";
import TextDescription from "components/common/TextDescription";
import Profile from "components/auth/Profile";
import Label from "components/common/Label";
import TextField from "components/common/TextField";


const SignupInfoStyled = styled.div`
    background-color: ${theme.colors.background};
    height: 100vh;
    header {
        background-color: white;
        display: flex;
        flex-direction: column;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 15px;
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
    .profile{
        margin-top: 13px;
    }
    .label{
        margin-top: 13px;
        margin-left: 27px;
    }
    .input-column{
        padding: 32px 20px;
        
        .text-field + .text-field{
            margin-top: 14px;
        }
    }
`;

const SignupInfoPage = () => {
    return (
        <Wrapper>
            <SignupInfoStyled>
                <header>
                    <ProgressBar value={50}></ProgressBar>
                    <div className="skip-button-box">
                        <div className="skip-button">
                            건너뛰기
                        </div>
                    </div>
                    <TextHeader>
                        도원님에 대해 조금 더 알려주세요.
                    </TextHeader>
                    <TextDescription>
                    다른 사람들이 내 책방을 구경할 때 표시할  정보를 <br/>입력해주세요.
                    </TextDescription>
                </header>
                <Profile name="도원" job="Product Owner" team="제리책방" imageUrl="" introduction="우가우가!"/>
                <Label type="info">내 정보는 나중에도 입력할 수 있어요</Label>
                <div className="input-column">
                    <TextField placeholder="도원" required labelText="이름"/>
                    <TextField placeholder="ex) 유저 / 치즈공학과" labelText="직업 또는 분야"/>
                    <TextField placeholder="ex) 제리책방 / 제리대학교" labelText="소속"/>
                    <TextField placeholder="이 곳에 한 줄 소개를 입력해주세요!" labelText="한 줄 소개"/>
                </div>
            </SignupInfoStyled>
        </Wrapper>
    )
}

export default SignupInfoPage;