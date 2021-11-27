import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useBook from '../hooks/useBook';
import Popup from './Popup';

type bookType = {
    name: string;
    imgUrl: string;
    backgroundColor: string;
}

const StyledMain = styled.div`
    height: calc(100vh - 80px);
    overflow-y: scroll;
    padding-top: 80px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-right: -100px;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
    .list-title{
        padding-top: 2rem;
        padding-bottom: .5rem;
        font-size: 1.25rem;
        font-weight: bold;
        text-align: left;
        width: 100%;
        max-width: 64rem;
        border-bottom: 1px solid #1e2828;
        margin: 0 auto;
        @media only screen and (max-width: 768px) {
          
        }
    }
    .book-list{
       
        transition: all 5s ease-out;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin: 0 auto;
        flex-wrap: wrap;
        width: 66rem;
        @media only screen and (max-width: 768px) {
          width: 100%;
        }
    }
`

const StyledBook = styled.div< { backgroundColor : string, focusBook: number, index: number} >`
    background-color: ${props => props.backgroundColor || 'white'};
    cursor: pointer;
    margin: 1rem;
    width: 20rem;
    height : 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;

    @media only screen and (max-width: 768px) {
        width: 100%;
        margin-left: 0;
        margin-right: 0;
        margin-top: 1rem;
        margin-bottom: 0;
    }

    .border{
        position: absolute;
        background-color: rgba(255, 255, 255, 0.5);
        transition-duration: 1s;
    }
    .bottom-border{
        bottom: 0;
        width:0;
        height: 5px;
    }
    .right-border{
        right: 0;
        width: 5px;
        height: 0;
    }
    .left-border{
        left: 0;
        width:5px;
        height: 0px;
    }
    .top-border{
        top: 0;
        width:0;
        height: 5px;
    }


    &:hover  .bottom-border{
        width:100%
    }
    &:hover .top-border{
        width: 100%;
    }

    &:hover  .left-border{
        height: 100%;
    }

    &:hover .right-border {
        height: 100%;
    }

   
    & > .book-img{
        width: 9.5rem;
        height : 240px;
    }
    & > img {
        height : 210px;;
        padding-top: 1rem;
        box-shadow: 5px 5px 10px rgb(0 0 0 / 10%);
        transition: width 0.75s, height 0.75s, left 0.75s, top 0.75s;
        position: absolute;
        left: calc( 50% - 4.75rem );
        top: calc( 50% - 130px);
        ${
            props => {
                if ( props.index === props.focusBook)
                {
                    return `
                        position: fixed;
                        height: 70vh;
                        z-index: 9999;
                        left: 100px;
                        top: 100px;
                    `
                }
            }
        }
    }

    & > .book-title{
        color: white;
        font-size: .75rem;
        padding-top: 1rem;
        font-family: '국립박물관문화재단클래식B';
        font-weight: 300;
        
    }

`

const MainComponent = ({search}: any) => {
    const {focusBook, onOpenBook} = useBook();
    const [previousColor, setPreviousColor] = useState<string>('white');
    const books: bookType[] = [
        {
            backgroundColor: '#bacaca',
            name: '부자아빠와 가난한 아빠',
            imgUrl: 'http://image.kyobobook.co.kr/images/book/xlarge/591/x9791158883591.jpg',
        },
        {
            backgroundColor: '#f4a9ae',
            name: '일의 기쁨과 슬픔',
            imgUrl: 'http://image.yes24.com/goods/80742923/XL',
        },
        {
            backgroundColor: '#6c4e2c',
            name: '소년과 개',
            imgUrl: 'http://image.yes24.com/goods/97155934/XL',
        },
        {
            backgroundColor: '#bdb591',
            name: '파친코',
            imgUrl: 'http://image.yes24.com/goods/59382261/XL',
        },
        {
            backgroundColor: '#68baea',
            name: '숨결이 바람 될 때',
            imgUrl: 'http://image.yes24.com/goods/30555650/XL',
        },
        {
            backgroundColor: '#b7933f',
            name: '당신 거기 있어줄래요?',
            imgUrl: 'https://t1.daumcdn.net/cfile/tistory/207B32444FCBEEFA27',
        },
        {
            backgroundColor: '#53090a',
            name: '홍학의 자리',
            imgUrl: 'https://img.ridicdn.net/cover/371002434/xxlarge',
        },
        {
            backgroundColor: '#3a75b7',
            name: '모순',
            imgUrl: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/N1a/image/5rhoc4X-0JLibJG3grC_-Ux_Fh0.jpg',
        },
        {
            backgroundColor: '#a50c13',
            name: '규칙 없음',
            imgUrl: 'http://image.yes24.com/goods/92275597/XL',
        },
        {
            backgroundColor: '#a6b1d8',
            name: '프리즘',
            imgUrl: 'http://image.yes24.com/goods/92300843/XL',
        },
        {
            backgroundColor: '#1a0608',
            name: '데미안',
            imgUrl: 'https://image.aladin.co.kr/product/26/0/cover500/s742633278_1.jpg',
        },
        {
            backgroundColor: '#5169b1',
            name: '연금술사',
            imgUrl: 'https://upload.wikimedia.org/wikipedia/ko/1/13/%EC%97%B0%EA%B8%88%EC%88%A0%EC%82%AC.jpg',
        },
        {
            backgroundColor: '#febc02',
            name: '모모',
            imgUrl: 'http://image.yes24.com/goods/1263/XL',
        },
        {
            backgroundColor: '#3f5d55',
            name: '인간실격',
            imgUrl: 'https://mblogthumb-phinf.pstatic.net/MjAxODEyMjlfMTIy/MDAxNTQ2MDQ0NzM2MzIw.OYOuO1tOiPtBtqvZClqAz3hJYcfMzMcjkYU-cU_4udsg.f6l7ano_acoXUfZdnmsAdSRrY4adMmd-v0VMN71Tku4g.JPEG.isof/C0%CE%B0A3BD%C7%B0DD.jpg?type=w800',
        },
    ]
    
    const bookList = books.filter(book => book.name.indexOf(search) !== -1).map((book, i) => {
        const {backgroundColor, name, imgUrl} = book;
        return (
            <StyledBook key={i} index={i} backgroundColor={backgroundColor} focusBook={focusBook} onClick={e => {
                focusBook !== i && onOpenBook(i)
                setPreviousColor(books[i].backgroundColor);
            }}>
                <img src={imgUrl}></img>
                <div className="book-img"></div>
                <div className='book-title'>{name}</div>
                <div className='bottom-border border'></div>
                <div className='right-border border'></div>
                <div className='left-border border'></div>
                <div className='top-border border'></div>
            </StyledBook>
        )
    })
    return (
        <StyledMain>
            <div className='list-title'>
                책 목록
            </div>
            <div className='book-list'>
                {bookList}
            </div>
            <Popup books={books} focusBook={focusBook} previousColor={previousColor} onOpenBook={onOpenBook}></Popup>
        </StyledMain>
    )
}

export default MainComponent;