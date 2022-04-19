import { Link } from "react-router-dom";
import styled from "styled-components";
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
        color: black;
        font-family: '국립박물관문화재단클래식B';
        text-decoration: none;
        padding: 2rem;
        word-break: keep-all;
    }
    .right-content{
       
       min-width: 1rem;
       //height: 100px;
       margin-right: 2rem;
    }
    .button{
        cursor: pointer;
        padding: 0.5rem 1.25rem;
        color: white;
        background-color: rgb(34, 34, 34);
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
                제리 책방 
            </div>
            <Search onChange={onChange}></Search>
            <div className='right-content'>
                <Link to='/posting'>
                    <div className='button'>등록</div>
                </Link>
            </div>
        </StyledHeader>
    )
}

export default Header;