import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useBook from '../hooks/useBook';
import Popup from './Popup';

const StyledMain = styled.div`
    height: calc(100vh - 80px);
    overflow-y: scroll;
    padding-top: 80px;
    width: calc(100% - 2rem);
    margin-left: 1rem;
    margin-right: 1rem;
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

const StyledBook = styled.div< { backgroundColor : string | string[], focusBook: number, index: number} >`
    background: ${props => {
        console.log(props.backgroundColor)
        if ( typeof props.backgroundColor === 'string'){
            return props.backgroundColor;
        }
        else{
            return 'linear-gradient( 45deg, #5f83c3, #a82676 )'
        }
    }};
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
    const {focusBook, onOpenBook, books} = useBook();
    const [previousColor, setPreviousColor] = useState<string | string[]>('white');
    
    const bookList = books?.filter(book => book.name.indexOf(search) !== -1).map((book, i) => {
        const {background_color, name, img_url} = book;
        return (
            <StyledBook key={i} index={i} backgroundColor={background_color} focusBook={focusBook} onClick={e => {
                focusBook !== i && onOpenBook(i)
                setPreviousColor((typeof books[i].background_color === 'string') ? books[i].background_color : 'white');
            }}>
                <img src={img_url}></img>
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