
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import styled from 'styled-components';
import usePost from '../../hooks/usePost';
import Input from '../common/Input';

const StyledPostEditor = styled.div`
    .button-row{
        display:flex;
        justify-content: flex-end;
    }
    .button{
        cursor: pointer;
        padding: 0.5rem 1.25rem;
        color: white;
        background-color: rgb(34, 34, 34);
    }
`

const Space = styled.div`
    height: 1rem;
`

const PostEditor = () => {

    const {onChangeInput, editorRef, onClickSubmit} = usePost();
    
    return (
        <StyledPostEditor>
        <h1>
            책 등록하기
        </h1>
        <Input placeholder='책 이름' onChange={onChangeInput} name='name'></Input>
        <Space></Space>
        <Input placeholder='책 저자'  onChange={onChangeInput} name='author'></Input>
        <Space></Space>
        <Input placeholder='책 이미지'  onChange={onChangeInput} name='image_url'></Input>
        <Space></Space>
        <Editor
            ref={editorRef}
         />
         <Space></Space>
         <div className='button-row'>
            <div className='button' onClick={onClickSubmit}>추가하기</div>
         </div>
         
        </StyledPostEditor>
        
    )
}

export default PostEditor;

