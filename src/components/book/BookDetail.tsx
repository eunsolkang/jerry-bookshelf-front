import styled from "styled-components";
import Wrapper from "../common/Wrapper";
import BookComponent from "./BookComponent";
import Rating from "../common/Rating";
import { Viewer } from "@toast-ui/react-editor";
import theme from "../../lib/styles/theme";

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
    }
    .book-header{
        display: flex;
        flex-direction: row;
        .info-row{
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
    const book =  {
        id: '12345',
        backgroundColor: '#f4a9ae',
        report: '',
        name: '일의 기쁨과 슬픔',
        author: '장류진',
        rating: 1,
        imageUrl: 'http://image.yes24.com/goods/80742923/XL',

    };
    const report = "## test\n## dasd\n기잉이임ㄴㅇ밈ㄴㅇ러ㅗㅁㅇ나ㅓ롬너아로머ㅏㄴㅇ로ㅓㅏ몽럼농라ㅓ몬ㅇ라ㅓㅁㄴㅇㄻㄴㄹㅇ\n\n\n\nasddassadgfsfgsdfg\n\n\n\naasdasdasdas\n\n\n\nasdasdasdasdasdfjkahfjkafafdasfdj\nsafjskfjaslkdfjasdf\nasjdfkad"
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
                    <Viewer initialValue={report} />
                </div>
            </Wrapper>
        </StyledBookDetail>
    )
}

export default BookDetail;