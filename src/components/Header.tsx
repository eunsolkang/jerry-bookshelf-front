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

  
    
`

const Header = ({onChange}: any) => {
    return (
        <StyledHeader>
            <div className='title'>
                제리 책방 
            </div>
            <Search onChange={onChange}></Search>
            <div className='right-content'>
                <div className='button'>
                    책 추가
                </div>
            </div>
        </StyledHeader>
    )
}

export default Header;