import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useBookList from '../../hooks/book/useBookList';
import useSearch from '../../hooks/useSearch';
import BookCard from './BookCard';
import BookPlaceholder from './BookPlaceholder';

const StyledMain = styled.div`
    &::-webkit-scrollbar {
        display: none;
    }
    overflow-y: scroll;
    padding-top: 80px;
    
    .list-title{
        min-width: 63rem;
        width: 100%;
        padding-top: 0rem;
        padding-bottom: .5rem;
        margin-bottom: 1rem;
        font-size: ${({theme})=>theme.fontSizes.listTitle};
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
    @media only screen and (max-width: 1024px) {
        .list-title{
            min-width: 100%;
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

const Main = () => {
    const bookQuery = useBookList();
    const {searchValue} = useSearch();

    if(!bookQuery.isSuccess){
        if ( bookQuery.isError ){
            return (
                <StyledMain>
                    <div className='book-list-container'>
                        <div className='list-title'>
                                은솔님의 책방
                        </div>
                        <div className='book-list'>
                            책들을 불러오지 못 했습니다!
                        </div>
                    </div>
                </StyledMain>
            )
        }
    
        if ( bookQuery.isLoading ){
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
        return <></>
    }
    
    const bookList = bookQuery.data.filter(book => book?.name?.indexOf(searchValue) !== -1).map((book, i) => {
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