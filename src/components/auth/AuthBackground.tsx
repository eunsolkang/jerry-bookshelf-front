import styled from 'styled-components';
import useBook from '../../hooks/book/useBookList';
import BookCard from "../book/BookCard";
import useBookList from "../../hooks/book/useMockBookList";

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
    
    .book{
        margin: 1rem;
    }
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
    const bookQuery = useBookList();
    if(!bookQuery.isSuccess){
        return <></>;
    }

    const bookList = [...(bookQuery.data.slice(0, 12)), ...bookQuery.data.slice(0, 12)].map((book, i) => {
        return (
            <div className='book'>
                <BookCard  book={book} key={i}></BookCard>
            </div>

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