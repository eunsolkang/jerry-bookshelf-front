import styled from 'styled-components';
import useBook from '../../hooks/useBook';
import BookCard from "../book/BookCard";

const listAnimation = (arrow: string) => {
    let result = '';
    if ( arrow === 'left'){
        for(let i=0, j=0, k=0; i<=100; i+=4, k++){
            if(k%2===0) j++;
            result += `${i}% { transform: translate(-${j*22}rem, 0); } `
        }
    } else{
        for(let i=0, j=13, k=0; i<=100; i+=4, k++){
            if(k%2===0) j--;
            result += `${i}% { transform: translate(-${j*22}rem, 0); } `
        }
    }
    return result;
}
const StyledAuthBackground = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow-y: hidden;
    width: 100vw;
    &::-webkit-scrollbar {
        display: none;
    }
    .book-list-container{
        margin: 0 auto;
        display: flex;
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
    }
    .left-move-top{
        animation-delay: 0s;
    }
    .left-move-bottom{
        animation-delay: 1s;
        margin-left: 1rem
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
`


const AuthBackground = () => {
    const { books } = useBook();
    if(!books){
        return <></>;
    }

    const bookList = [...(books.slice(0, 12)), ...books.slice(0, 12)].map((book, i) => {
        return (
            <BookCard book={book} key={i}></BookCard>
        )
    });

    return (
        <StyledAuthBackground>
            <div className='book-list-container'>
                <div className='book-list left-move left-move-top'>
                    {bookList}
                </div>
                <div className='book-list right-move'>
                    {bookList}
                </div>
                <div className='book-list left-move left-move-bottom'>
                    {bookList}
                </div>
            </div>
        </StyledAuthBackground>
    )
}

export default AuthBackground;