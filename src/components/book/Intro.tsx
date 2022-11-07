import styled from 'styled-components';
import useBookList from '../../hooks/book/useMockBookList';
import theme from '../../lib/styles/theme';
import Button from '../common/Button';
import ProgressBar from '../common/ProgressBar';
import BookCard from './BookCard';

const listAnimation = (arrow: string) => {
    let result = '';
    if ( arrow === 'left'){
        for(let i=0, j=0, k=0; i<=100; i+=4, k++){
            if(k%2===0) j++;
            result += `${i}% { transform: translate(-${j*120}px, 0); } `
        }
    } else{
        for(let i=0, j=13, k=0; i<=100; i+=4, k++){
            if(k%2===0) j--;
            result += `${i}% { transform: translate(-${j*120}px, 0); } `
        }
    }
    return result;
}

const IntroStyled = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .contents{
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .title{
        margin-top: 20px;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        position: relative;
        .point-circle{
            left: 20px;
            top: -13px;
            position: absolute;
            width: 15px;
            height: 15px;
            background-color: ${theme.colors.primary};
            border-radius: 100%;
        }
    }
    .description{
        margin-top: 35px;
        font-size: 14px;
        text-align: center;
    }
    .link-box{
        margin-top: 48px;
        box-shadow: 5px 5px 10px rgb(0 0 0 / 10%);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .25rem 1rem;
        border-radius: 48px;
        img{
            width: 24px;
            height: 24px;
            margin-right: .5rem;
        }
        span{
            font-weight: bold;
        }
    }
    .vertical-line{
        margin-top: 9px;
        margin-bottom: 13px;
        height: 40px;
        width: 1px;
        border-color: #8C8C8C;
        border-style: dashed;
        border-left-style: none;
        border-top-style: none;
        border-bottom-style: none;
    }
    .book{
        margin: 2.5px;
    }
    &::-webkit-scrollbar {
        display: none;
    }
    .book-list-container{
        margin: 0 auto;
        //display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @keyframes list-left-animation { 
      ${listAnimation('left')}
    }
    @keyframes list-right-animation { 
      ${listAnimation('right')}
    }

    .book-list{
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .left-move-top{
        animation-delay: 0s;
    }
    .left-move-bottom{
        animation-delay: 1s;
        margin-left: 1rem;
    }
    .left-move{
        animation-fill-mode: backwards;
        animation-iteration-count: infinite;
        flex-direction: row-reverse;
        justify-content: flex-start;
        animation-name: list-left-animation;
        animation-duration: 40s;
        
    }
    .right-move{
        flex-direction: row;
        justify-content: flex-start;
        animation-name: list-right-animation;
        animation-duration: 40s;
        animation-delay: 0.5s;
        animation-iteration-count: infinite;
    }
    .bottom-sheet{
        padding: 20px;
    }

`
const Intro = () => {
    const bookQuery = useBookList();
    if(!bookQuery.isSuccess){
        return <></>;
    }

    const bookList = [...(bookQuery.data.slice(0, 12)), ...bookQuery.data.slice(0, 12)].map((book, i) => {
        return (
            <div className='book'>
                <BookCard book={book} key={i}></BookCard>
            </div>
        )
    });

    
    return (
        <IntroStyled>
            <ProgressBar value={30}></ProgressBar>
            <div className='contents'>
                <div className='title'>
                    <div className='point-circle'></div>
                    안녕하세요 도원님,
                    <br/>
                    제리책방에 온것을 환영해요
                </div>
                <div className='description'>
                    내가 읽었던 소중한 책들,<br/>
                    이제는 링크 하나로 한 번에 담아서 자랑해요.<br/>
                    <span>간단한 정보</span>를 입력하고 책방을 만들어볼까요?
                </div>

                <div className='link-box'>
                    <img className='logo' src='icon/logo-jerrybook-main.svg' alt='logo'></img>
                    jerrybook.app/<span>murung_dowon</span>
                </div>
                
                <div className='vertical-line'/>
                <div className='book-list-container'>
                    <div className='book-list right-move'>
                        {bookList}
                    </div>
                    <div className='book-list left-move left-move-bottom'>
                        {bookList}
                    </div>
                </div>
            </div>
            <div className='bottom-sheet'>
                <Button fullWidth>30초만에 책방 만들기</Button>
            </div>
        </IntroStyled>
    )
}

export default Intro