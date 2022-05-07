import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useBook from '../../hooks/useBook';
import BookCard from './BookCard';
import BookPlaceholder from './BookPlaceholder';

const StyledMain = styled.div`
    &::-webkit-scrollbar {
        display: none;
    }
    height: calc(100vh - 80px);
    overflow-y: scroll;
    padding-top: 80px;
    
    .list-title{
        width: 100%;
        padding-top: 0rem;
        padding-bottom: .5rem;
        margin-bottom: 1rem;
        font-size: ${({theme})=>theme.fontSizes.listTitle};;
        font-weight: bold;
        border-bottom: 1px solid ${({theme})=>theme.colors.border};
        color: ${({theme})=>theme.colors.text};
    }
    .book-list-container{
        ${({theme}) => theme.flex.columnCenter}
        width: min-content;
        margin: 0 auto;
        padding-bottom: 80px;
    }
    .book-list{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 1.5rem;
        row-gap: 1.5rem;
    }
    @media only screen and (max-width: 768px) {
        .list-title{
            font-size: ${({theme})=>theme.mobileFonts.listTitle};;
        }
        .book-list-container{
            width: 100%;
            padding-left: .75rem;
            padding-right: .75rem;
            box-sizing: border-box;
        }
        .book-list{
            width: 100%;
            display: grid;
            column-gap: .75rem;
            row-gap: .75rem;
            grid-template-columns: 1fr 1fr;
        }
    }
`

const Main = ({search}: any) => {
    const { books } = useBook();
    if ( !books ){
        return (
            <StyledMain>
                <div className='book-list-container'>
                    <div className='list-title'>
                            은솔님의 책방
                    </div>
                    <div className='book-list'>
                        {Array(9).fill(0).map(i=><BookPlaceholder/>)}
                    </div>
                </div>
            </StyledMain>
        )
    }
    const bookList = books?.filter(book => book?.name?.indexOf(search) !== -1).map((book, i) => {
        return (
            <Link to={`/book/${book.id}`}>
                <BookCard book={book} key={i}></BookCard>
            </Link>
        )
    });

    return (
        <StyledMain>
            <div className='book-list-container'>
                <div className='list-title'>
                        은솔님의 책방
                </div>
                <div className='book-list'>
                    {bookList}
                </div>
            </div>
        </StyledMain>
    )
}

export default Main;