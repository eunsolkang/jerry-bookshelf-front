import styled from "styled-components";
import { Book } from "../../types/book";
import Rating from "../common/Rating";

const StyledBookCard = styled.div< { backgroundColor : string, imageUrl: string} >`
    ${({theme})=>theme.flex.columnCenter}
    //background: url(${props => props.imageUrl}) center, center;
    background-color: ${props => props.backgroundColor};
    background-size: cover;
    cursor: pointer;
    width: 20rem;
    height : 20rem;
    position: relative;
    
    border-radius: 24px;
    /*
    .backdrop-filter{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(1rem) contrast(.75);
        z-index: 50;
        border-radius: 24px;
    }
    */
    .book-image {
        z-index: 100;
        height : 210px;
        box-shadow: 5px 5px 10px rgb(0 0 0 / 10%);
    }

    .book-cover {
        z-index: 100;
       position: absolute;
       bottom: 0;
       display: flex;
       align-items: flex-start;
       justify-content: flex-end;
       flex-direction: column;
       
       visibility: hidden;
       width: 100%;
       box-sizing: border-box;
       padding: 1rem;
       border-radius: 4px 4px 24px 24px;
       background-color: rgba(0, 0, 0, 0.0);
       transition: background-color 0.3s ease-in-out;
       .name{
        color: ${({theme})=>theme.colors.lightenTitle};
        margin-top: .5rem;
        font-weight: bold;
       } 
       .author{
        font-size: ${({theme})=>theme.fontSizes.boxSubTitle};
        color: ${({theme})=>theme.colors.lightenSubTitle};
       } 
    }
    &:hover > .book-cover{
      visibility: initial;
      background-color: rgba(0, 0, 0, 0.6);
    }

    @media only screen and (max-width: 1024px) {
        width: 100%;
        height: auto;
        border-radius: 4px;
        padding-bottom: 100%;
        & > .book-image {
            position: absolute;
            top: calc(50% - 32.5%);
            height: 65%;
        }
        .book-cover{
            border-radius: 4px;
        }
    }


`
type BookPropsType = {
    book: Book
}

const BookCard:React.FC<BookPropsType> = ({book}) => {
    const {name, imageUrl, author} = book;
    return (
        <StyledBookCard backgroundColor={book.backgroundColor} imageUrl={book.imageUrl}>
            <div className='backdrop-filter'>

            </div>
            <img src={imageUrl} alt='book' className='book-image'></img>
            <div className='book-cover'>
                <div className='author'>{author}</div>
                <div className='name'>{name}</div>
                <Rating rating={book.rating}/>
            </div>
        </StyledBookCard>
    )
}

export default BookCard;