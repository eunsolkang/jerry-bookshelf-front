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
    padding-right: 1rem;
    .title{
        padding: 2rem;
        word-break: keep-all;
    }
    .right-content{
       width: 155px;
       min-width: 1rem;
       height: 100px;
    }
    
`

const Header = ({onChange}: any) => {
    return (
        <StyledHeader>
            <div className='title'>
                제리 책방 
            </div>
            <Search onChange={onChange}></Search>
            <div className='right-content'></div>
        </StyledHeader>
    )
}

export default Header;