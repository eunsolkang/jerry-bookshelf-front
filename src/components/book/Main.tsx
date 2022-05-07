import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useBook from '../../hooks/useBook';
import BookComponent from './BookComponent';
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
        padding-top: 1rem;
        padding-bottom: .5rem;
        font-size: ${({theme})=>theme.fontSizes.subTitle};;
        font-weight: bold;
        border-bottom: 1px solid ${({theme})=>theme.colors.border};
        color: ${({theme})=>theme.colors.text};
    }
    .book-list-container{
        ${({theme}) => theme.flex.columnCenter}
        width: min-content;
        margin: 0 auto;
    }
    .book-list{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
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
                <BookComponent book={book} key={i}></BookComponent>
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