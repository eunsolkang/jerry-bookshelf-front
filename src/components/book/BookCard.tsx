import styled from "styled-components";
import { Book } from "../../types/book";

const StyledBookCard = styled.div< { backgroundColor : string, imageUrl: string} >`
    ${({theme})=>theme.flex.columnCenter}
    background-color: ${props => props.backgroundColor};
    background-size: cover;
    cursor: pointer;
    width: 20rem;
    height : 20rem;
    position: relative;
    
    border-radius: 24px;
    .book-image {
        z-index: 100;
        width: 60px;
        height: auto;
        box-shadow: 5px 5px 10px rgb(0 0 0 / 10%);
    }

    @media only screen and (max-width: 1024px) {
        width: 120px;
        height : 120px;
        border-radius: 4px;
        & > .book-image {
            position: absolute;
            //top: calc(50% - 32.5%);
            //height: 65%;
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
            <img src={imageUrl} alt='book' className='book-image'></img>
        </StyledBookCard>
    )
}

export default BookCard;