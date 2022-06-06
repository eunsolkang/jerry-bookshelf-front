import { Link } from "react-router-dom";
import styled from "styled-components";
import useSearch from "../../hooks/useSearch";
import Button from "./Button";
import Search from "./Search";
import Wrapper from "./Wrapper";

const StyledHeader = styled.div`
    height: 60px;
    position: fixed;
    width: 100vw;
    background-color: white;
    box-shadow: 5px 5px 10px rgb(0 0 0 / 10%);
    z-index: 120;
    .wrapper{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .search{
            flex: 1;
            width: 100%;
        }
    }
    
    .title{
        text-decoration: none;
        word-break: keep-all;
        font-family: 'Dongle', sans-serif;
        font-size: ${({theme})=>theme.fontSizes.title};
        color: ${({theme})=>theme.colors.black};
    }
    .right-content{
        margin-right: 1rem;
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

const Header = () => {
    const {onChange} = useSearch();
    return (
        <StyledHeader>
            <Wrapper className='wrapper'>
                <Link className='title' to='/'>제리책방</Link>
                <Search className='search' onChange={onChange}></Search>
                <div className='right-content'>
                    <Button to='/posting' className='add-book-button'>책 추가</Button>
                </div>
            </Wrapper>
        </StyledHeader>
    )
}

export default Header;