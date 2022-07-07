import styled from "styled-components";
import Wrapper from "../common/Wrapper";
import Rating from "../common/Rating";
import { Viewer } from "@toast-ui/react-editor";
import useBookById from "../../hooks/book/useBookById";
import useDeleteBook from "../../hooks/book/useDeleteBook";
import { lighten } from "polished";

const StyledBookDetail = styled.div<{backgroundColor: string}>`
    padding: 2rem;
    width: 100%;
    height: 280px;
    background-color: ${props => props.backgroundColor};
    header{
        height: 60px;
    }
    .book-image{
        width: 300px;
        box-shadow: 5px 5px 10px rgb(0 0 0 / 10%);
    }
    .book-header{
        display: flex;
        flex-direction: row;
        .info-row{
            flex: 1;
            margin-left: 2rem;
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
                font-size: ${({theme}) => theme.fontSizes.title};
                font-weight: bold;
                color: white;
            }
            .author{
                margin-left: .25rem;
                margin-top: .75rem;
                font-size: ${({theme}) => theme.fontSizes.subTitle};
                font-weight: bold;
                color: rgba(255, 255, 255, 0.7);
            }
            .rating-input{
                margin-top: 1rem;
                margin-left: .25rem;
            }
        }
        .book-handle{
            .text-button{
                color: rgba(255, 255, 255, 0.6);
                cursor: pointer;
            }
            .text-button + .text-button{
                margin-left: .5rem;
            }
            .text-button:hover{
                font-weight: bold;
                color: white;
            }
        }
    }
    .contents{
        border-radius:24px;
        box-shadow: 5px 5px 10px rgb(0 0 0 / 10%);
        margin-top: -250px;
        background-color: white;
        margin-left: calc(300px + 2rem);
        padding: 1.25rem;
    }
`;

const BookDetail = () => {
    const bookQuery = useBookById();
    const {onDeleteBook} = useDeleteBook();
    
    if(!bookQuery.isSuccess){
        return <></>
    }
    return(
        
        <StyledBookDetail backgroundColor={bookQuery.data.backgroundColor}>
            <Wrapper>
                <header>

                </header>
                <div className='book-header'>
                    <img className='book-image' src={bookQuery.data.imageUrl}></img>
                    <div className='info-row'>
                        <div className='category'>
                            에세이
                        </div>
                        <div className='title'>
                            {bookQuery.data.name}
                        </div>
                        <div className='author'>
                            {bookQuery.data.author}
                        </div>
                        <Rating rating={bookQuery.data.rating}/>
                    </div>
                    <div className="book-handle">
                        <span className='text-button' onClick={onDeleteBook}>
                            수정
                        </span>
                        <span className='text-button' onClick={onDeleteBook}>
                            삭제
                        </span>
                    </div>
                </div>
                <div className="contents">
                    <Viewer initialValue={bookQuery.data.report} />
                </div>
            </Wrapper>
        </StyledBookDetail>
    )
}

export default BookDetail;