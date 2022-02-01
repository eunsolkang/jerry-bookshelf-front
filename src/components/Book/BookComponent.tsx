import styled from "styled-components";
import { Book } from "../../models/book";

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


    &:hover > .bottom-border, &:hover > .top-border{
        width:100%
    }
    &:hover > .left-border, &:hover > .right-border{
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
    }

    & > .book-title{
        color: white;
        font-size: .75rem;
        padding-top: 1rem;
        font-weight: 300;
    }

`
type BookComponentType = {
    onOpenBook: (book: Book) => void, 
    backgroundColor: string,
    book: Book
}

const BookComponent:React.FC<BookComponentType> = ({backgroundColor, onOpenBook, book}) => {
    const {name, image_url} = book;
    return (
        <StyledBookComponent backgroundColor={backgroundColor} onClick={e => onOpenBook(book)}>
            <img src={image_url} alt='book'></img>
            <div className='book-title'>{name}</div>
            <div className='bottom-border border'></div>
            <div className='right-border border'></div>
            <div className='left-border border'></div>
            <div className='top-border border'></div>
        </StyledBookComponent>
    )
}

export default BookComponent;