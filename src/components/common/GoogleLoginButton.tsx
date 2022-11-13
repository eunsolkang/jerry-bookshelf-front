import styled from "styled-components";

const StyledGoogleLoginButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
    padding-top: .75rem;
    padding-bottom: .75rem;
    box-sizing: border-box;
    border-radius: 8px;
    margin-top: 1rem;
    font-size: 14px;
    cursor: pointer;
    background-color: rgb(252, 252, 252);
    color: ${({theme})=>theme.colors.text};
    img{
        margin-right: 10px;
        width: 18px;
        height: 18px;
    }
`

const GoogleLoginButton = () => {
    return (
        <StyledGoogleLoginButton>  
            <img src='icon/google.png'/>
            구글계정으로 로그인하기
        </StyledGoogleLoginButton>
    )
}

export default GoogleLoginButton;