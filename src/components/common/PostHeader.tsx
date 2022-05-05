import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledPostHeader = styled.div`
    height: 60px;
    position: fixed;
    top: 0;
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
        font-family: '국립박물관문화재단클래식B';
        color: black;
        text-decoration: none;
        padding: 2rem;
        word-break: keep-all;
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

const PostHeader = ({onChange}: any) => {
    return (
        <StyledPostHeader>
            <Link to='/'>
                <div className='title'>
                    제리 책방 
                </div>
            </Link>
            <div className='right-content'>
                
            </div>
        </StyledPostHeader>
    )
}

export default PostHeader;