import { ChangeEvent, useEffect, useRef, useState } from "react"
import { createBook } from "../lib/api";

export default function usePost(){
    const [input, setInput] = useState({
        name: '',
        author: '',
        image_url : ''
    });
    const editorRef = useRef(null);
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setInput({
            ...input,
            [name]: value
        });

        console.log(input);
        
    }

    const onClickSubmit = async() => {
        if ( input.name.trim() === '' ){
            alert('책 제목을 입력해주세요!');
            return;
        }

        const editor = editorRef.current as any;
        const lineTexts = editor.getInstance().toastMark.lineTexts;

        const text: string=  lineTexts.join('\n');
        
        const requestBook = {
            ...input,
            background_color: '#fff',
            report: text
        }

        try{
            const res = await createBook(requestBook);
            alert('추가가 완료되었습니다.');
            window.location.href = '/';
        } catch(e){
            alert('오류가 발생했습니다!')
        }
    }

    useEffect(()=>{

    }, [])

    return {onChangeInput, editorRef, onClickSubmit}

    
}