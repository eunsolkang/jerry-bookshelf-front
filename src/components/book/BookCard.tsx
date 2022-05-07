import styled from "styled-components";
import { BookType } from "../../models/book";
import Rating from "../common/Rating";

const StyledBookCard = styled.div< { backgroundColor : string} >`
    ${({theme})=>theme.flex.columnCenter}
    background: ${props => props.backgroundColor};
    cursor: pointer;
    width: 20rem;
    height : 20rem;
    position: relative;
    border-radius: 24px;
    .book-image {
        height : 210px;
        box-shadow: 5px 5px 10px rgb(0 0 0 / 10%);
    }

    .book-cover {
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

    @media only screen and (max-width: 768px) {
        width: 100%;
        height: auto;
        border-radius: 4px;
        padding-bottom: 100%;
        & > .book-image {
            position: absolute;
            top: calc(50% - 60px);
            height: 120px;
        }
    }


`
type BookPropsType = {
    book: BookType
}

const BookCard:React.FC<BookPropsType> = ({book}) => {
    const {name, imageUrl, author} = book;
    return (
        <StyledBookCard backgroundColor={book.backgroundColor}>
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