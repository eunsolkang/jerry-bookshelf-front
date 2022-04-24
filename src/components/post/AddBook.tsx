
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import styled from 'styled-components';
import useAddBook from '../../hooks/useAddBook';
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
        .rating-input{
            display: flex;
            flex-direction: row-reverse;
            justify-content: flex-end;
            align-items: flex-end;
            width: 100%;
            .fill{
                path{
                    fill: #f7cd01;
                }
            }
            svg{
                padding-right: .25rem;
                path{
                    fill: #b4b4b4;
                }
            }
            svg:hover{
                path{
                    fill: #f7cd01;
                }
            }
            svg:hover ~ svg{
                path{
                    fill: #f7cd01;
                }
            }
        }
    }
`

const StyledBook = styled.div<{ backgroundColor : string} >`
    display: flex;
    align-items: center;
    justify-content: center;
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
                <div className='rating-input'>
                   {
                       [1, 2, 3, 4, 5].reverse().map(i => (
                            <svg className={i <= input.rating ? 'fill' : ''} onClick={()=>onChangeRating(i)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                       ))
                   }
                </div>
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

