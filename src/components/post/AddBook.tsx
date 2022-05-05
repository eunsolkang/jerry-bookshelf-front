
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import styled from 'styled-components';
import useAddBook from '../../hooks/useAddBook';
import Rating from '../common/Rating';
import Button from '../common/Button';
import Input from '../common/Input';

const StyledPostEditor = styled.div`
    .input{
        margin-bottom: 1rem;
    }
    .button{
        margin-top: 1rem;
    }
    .add-book-box{
        display: flex;
        flex-direction: row;
        .input-box{
            flex: 1;
        }
    }
`

const StyledBook = styled.div<{ backgroundColor : string} >`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${props => props.backgroundColor || '#b4b4b4'};
    width: 20rem;
    height : 20rem;
    background: ${props => props.backgroundColor};
    margin-left: 1rem;
    margin-bottom: 1rem;
    border-radius: 24px;
    img{
        height : 210px;;
        box-shadow: 5px 5px 10px rgb(0 0 0 / 10%);
    }
`;

const AddBook = () => {

    const {onChangeInput, editorRef, onClickSubmit, input, onChangeRating} = useAddBook();
    
    return (
        <StyledPostEditor>
        <h1>
            책 등록하기
        </h1>
        <div className='add-book-box'>
            
            <div className='input-box'>
                <Input placeholder='책 이름' onChange={onChangeInput} name='name'></Input>
                <Input placeholder='책 저자'  onChange={onChangeInput} name='author'></Input>
                <Input placeholder='책 이미지'  onChange={onChangeInput} name='imageUrl'></Input>
                <Input placeholder='배경색상' type='color' onChange={onChangeInput} name='backgroundColor'></Input>
                <Rating onChangeRating={onChangeRating} rating={input.rating} size={24}/>
            </div>
            <StyledBook backgroundColor={input.backgroundColor}>
                <img src={input.imageUrl}></img>
            </StyledBook>
        </div>
        
        <Editor
            ref={editorRef}
         />
         <Button onClick={onClickSubmit}>추가하기</Button>
         
        </StyledPostEditor>
        
    )
}

export default AddBook;

