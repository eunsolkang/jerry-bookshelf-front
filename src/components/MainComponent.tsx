import styled from 'styled-components';
import useBook from '../hooks/useBook';
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
        display: none; /* Chrome, Safari, Opera*/
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
        @media only screen and (max-width: 768px) {
          
        }
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
        //width: 66rem;
        @media only screen and (max-width: 768px) {
         // width: 100%;
        }
    }
`
const MainComponent = ({search}: any) => {
    const {focusBook, onOpenBook, onCloseBook ,books, previousColor } = useBook();
    
    const bookList = books?.filter(book => book.name.indexOf(search) !== -1).map((book, i) => {
        const {background_color, uuid} = book;
        return (
            <BookComponent backgroundColor={background_color} onOpenBook={onOpenBook} book={book} key={uuid}></BookComponent>
        )
    })
    return (
        <StyledMain>
            <div className='list-title'>
                책 목록
            </div>
            <div className='book-list-container'>
                <div className='book-list'>
                    {bookList}
                </div>
            </div>
            <Popup focusBook={focusBook} previousColor={previousColor} onCloseBook={onCloseBook}></Popup>
        </StyledMain>
    )
}

export default MainComponent;