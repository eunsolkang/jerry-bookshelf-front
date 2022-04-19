import styled from 'styled-components';
import useBook from '../../hooks/useBook';
import BookComponent from './BookComponent';
import Popup from './Popup';

const StyledMain = styled.div`
    height: calc(100vh - 80px);
    overflow-y: scroll;
    padding-top: 80px;
    width: calc(100% - 2rem);
    margin-left: 1rem;
    margin-right: 1rem;
    display: flex;
    flex-direction: column;
    padding-right: -100px;
    &::-webkit-scrollbar {
        display: none;
    }

    .list-title{
        padding-top: 2rem;
        padding-bottom: .5rem;
        font-size: 1.25rem;
        font-weight: bold;
        text-align: left;
        width: 100%;
        max-width: 64rem;
        border-bottom: 1px solid #1e2828;
        margin: 0 auto;
    }
    .book-list-container{
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .book-list{
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }
`
const StyledPlaceHolder = styled.div`
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
        margin: 1rem 0 0;
    }
    @-webkit-keyframes skeleton-gradient {
        0% {
            background-color: rgba(165, 165, 165, 0.1);
        }

        50% {
            background-color: rgba(165, 165, 165, 0.3);
        }

        100% {
            background-color: rgba(165, 165, 165, 0.1);
        }
    }

    @keyframes skeleton-gradient {
        0% {
            background-color: rgba(165, 165, 165, 0.1);
        }

        50% {
            background-color: rgba(165, 165, 165, 0.3);
        }

        100% {
            background-color: rgba(165, 165, 165, 0.1);
        }
    }
    -webkit-animation: skeleton-gradient 1.8s infinite ease-in-out;
    animation: skeleton-gradient 1.8s infinite ease-in-out;
`
const MainComponent = ({search}: any) => {
    const {focusBook, onOpenBook, onCloseBook ,books, previousBook } = useBook();
    if ( !books ){
        return (
            <StyledMain>
                <div className='book-list-container'>
                    <div className='book-list'>
                        <StyledPlaceHolder/>
                        <StyledPlaceHolder/>
                        <StyledPlaceHolder/>
                        <StyledPlaceHolder/>
                        <StyledPlaceHolder/>
                        <StyledPlaceHolder/>
                        <StyledPlaceHolder/>
                        <StyledPlaceHolder/>
                        <StyledPlaceHolder/>
                    </div>
                </div>
            </StyledMain>
        )
    }
    const bookList = books?.filter(book => book?.name?.indexOf(search) !== -1).map((book, i) => {
        const {backgroundColor, uuid} = book;
        return (
            <BookComponent backgroundColor={backgroundColor} onOpenBook={onOpenBook} book={book} key={i}></BookComponent>
        )
    });

    return (
        <StyledMain>
            <div className='book-list-container'>
                <div className='book-list'>
                    {bookList}
                </div>
            </div>
            <Popup focusBook={focusBook} previousBook={previousBook} onCloseBook={onCloseBook}></Popup>
        </StyledMain>
    )
}

export default MainComponent;