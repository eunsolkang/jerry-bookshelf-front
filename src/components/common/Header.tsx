import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import Search from "./Search";

const StyledHeader = styled.div`
    height: 60px;
    position: fixed;
    width: 100vw;
    background-color: white;
    box-shadow: 5px 5px 10px rgb(0 0 0 / 10%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 100;
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
        img{
            height: 30px;
        }
        span{
            margin-left: .5rem;
            font-family: 'Dongle', sans-serif;
            font-size: 1.5rem;
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
            <div className='title'>
                <img src='icon/logo.svg'></img>
                <span>제리 책방</span>
            </div>
            <Search onChange={onChange}></Search>
            <div className='right-content'>
                <Button to='/posting'>추가하기</Button>
            </div>
        </StyledHeader>
    )
}

export default Header;