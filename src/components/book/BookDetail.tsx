import styled from "styled-components";
import Wrapper from "../common/Wrapper";
import BookComponent from "./BookComponent";
import Rating from "../common/Rating";
import { Viewer } from "@toast-ui/react-editor";

const StyledBookDetail = styled.div<{backgroundColor: string}>`
    padding: 2rem;
    width: 100%;
    height: 280px;
    background-color: ${props => props.backgroundColor};
    header{
        height: 70px;
    }
    .book-image{
        width: 300px;
    }
    .book-header{
        display: flex;
        flex-direction: row;
        .info-row{
            margin-left: 1rem;
            display: flex;
            flex-direction: column;
            .category{
                margin-left: .25rem;
                margin-top: .25rem;
                margin-bottom: .75rem;
                font-size: 1rem;
                font-weight: bold;
                color: rgba(255, 255, 255, 0.7);
            }
            .title{
                font-size: 2rem;
                font-weight: bold;
                color: white;
            }
            .author{
                margin-left: .25rem;
                margin-top: .75rem;
                font-size: 1.2rem;
                font-weight: bold;
                color: rgba(255, 255, 255, 0.7);
            }
        }
    }
`;

const BookDetail = () => {
    const book =  {
        id: '12345',
        backgroundColor: '#f4a9ae',
        report: '',
        name: '일의 기쁨과 슬픔',
        author: '장류진',
        rating: 1,
        imageUrl: 'http://image.yes24.com/goods/80742923/XL',

    };
    return(
        <StyledBookDetail backgroundColor='#f4a9ae'>
            <Wrapper>
                <header>

                </header>
                <div className='book-header'>
                    <img className='book-image' src={book.imageUrl}></img>
                    <div className='info-row'>
                        <div className='category'>
                            에세이
                        </div>
                        <div className='title'>
                            {book.name}
                        </div>
                        <div className='author'>
                            {book.author}
                        </div>
                        <Rating rating={book.rating}/>
                    </div>
                </div>
                <div className="contents">
                    <Viewer initialValue={'독후감'} />
                </div>
            </Wrapper>
        </StyledBookDetail>
    )
}

export default BookDetail;