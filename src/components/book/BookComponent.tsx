import styled from "styled-components";
import { Book } from "../../models/book";
import Rating from "./Rating";

const StyledBookComponent = styled.div< { backgroundColor : string} >`
    background: ${props => props.backgroundColor};
    cursor: pointer;
    margin: 1rem;
    width: 20rem;
    height : 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 24px;
    position: relative;

    @media only screen and (max-width: 768px) {
        width: 100%;
        margin: 1rem 0 0;
    }

    & > .book-img{
        width: 9.5rem;
        height : 240px;
    }
    & > img {
        height : 210px;;
        //padding-top: 1rem;
        box-shadow: 5px 5px 10px rgb(0 0 0 / 10%);
    }

    & > .book-title{
        color: white;
        font-size: .75rem;
        padding-top: 1rem;
        font-weight: 300;
    }
    & > .book-cover {
       
       display: flex;
       align-items: flex-start;
       justify-content: flex-end;
       flex-direction: column;
       
       transition: background-color 0.3s ease-in-out;
       visibility: hidden;
       position: absolute;
       background-color: rgba(0, 0, 0, 0.0);
       min-width: 100%;
       min-height: 100%;
       box-sizing: border-box;
       padding: 1rem;
       border-radius: 24px;
       & > .name{
        color: white;
        margin-top: .5rem;
        font-weight: bold;
       } 
       & > .author{
        font-size: 0.75rem;
        color: rgb(212, 212, 212);
       } 
    }
    &:hover > .book-cover{
      visibility: initial;
      background-color: rgba(0, 0, 0, 0.6);
    }


`
type BookComponentType = {
    onOpenBook: (book: Book) => void, 
    backgroundColor: string,
    book: Book
}

const BookComponent:React.FC<BookComponentType> = ({backgroundColor, onOpenBook, book}) => {
    const {name, imageUrl, author} = book;
    return (
        <StyledBookComponent backgroundColor={backgroundColor} onClick={e => onOpenBook(book)}>
            <img src={imageUrl} alt='book'></img>
            <div className='book-cover'>
                <div className='author'>{author}</div>
                <div className='name'>{name}</div>
                <Rating rating={book.rating}/>
            </div>
            {/*<div className='book-title'>{name}</div>*/}
        </StyledBookComponent>
    )
}

export default BookComponent;