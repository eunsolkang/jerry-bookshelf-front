import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import Search from "./Search";
import Wrapper from "./Wrapper";

const StyledHeader = styled.div`
    height: 60px;
    position: fixed;
    width: 100vw;
    background-color: white;
    box-shadow: 5px 5px 10px rgb(0 0 0 / 10%);
    
    z-index: 100;
    .wrapper{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    a{
        text-decoration: none;
    }
    .title{
        display: flex;
        align-items: center;
        color: black;
        text-decoration: none;
        font-size: 1rem;
        padding: 2rem;
        word-break: keep-all;
        cursor: pointer;
        span{
            //margin-left: .5rem;
            font-family: 'Dongle', sans-serif;
            font-size: 2rem;
        }
    }
    .right-content{ 
       min-width: 1rem;
       margin-right: 2rem;
    }
    @media only screen and (max-width: 768px) {
        .title{
            padding: .75rem;
        }
        .right-content{
            margin-right: .75rem;
        }
    }
  
    
`

const Header = ({onChange}: any) => {
    return (
        <StyledHeader>
            <Wrapper className='wrapper'>
                <div className='title'>
                    <span>제리책방</span>
                </div>
                <Search onChange={onChange}></Search>
                <div className='right-content'>
                    <Button to='/posting'>책 추가</Button>
                </div>
            </Wrapper>
        </StyledHeader>
    )
}

export default Header;