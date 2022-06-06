import { useRef, useState } from "react"
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { createBook } from "../../lib/api";
import { openModal } from "../../store/slice/modalSlice";
import { RequestBook } from "../../types/book";
import { useHistory } from "react-router-dom";

export default function useAddBook(){
    const [input, setInput] = useState<RequestBook>({
        name: '',
        author: '',
        imageUrl : '',
        backgroundColor: '',
        rating: 0.0,
        report: ''
    });
    const mutation = useMutation((newBook: RequestBook) => createBook(newBook)) 
    const dispatch = useDispatch();
    const history = useHistory();
    

    const editorRef = useRef(null);
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setInput({
            ...input,
            [name]: value
        });
    }

    const onClickSubmit = async() => {
        if ( input.name.trim() === '' ){
            dispatch(openModal({
                title: '거의 다 왔습니다!',
                description: '책 제목을 알려주세요!',
                positiveText: '확인',
                negativeText: '취소',
            }));
            return;
        }
        if( input.rating === 0.0 ){
            dispatch(openModal({
                title: '거의 다 왔습니다!',
                description: '별점을 추가해주세요!',
                positiveText: '확인',
                negativeText: '취소',
            }));
            return;
        }

        const editor = editorRef.current as any;
        const requestBook = {
            ...input,
            report: editor.getInstance().toastMark.lineTexts.join('\n'),
        }

        mutation.mutate(requestBook, {
            onSuccess: () =>{
                history.push('/');
            },
            onError: (err)=>{
                dispatch(openModal({
                    title: '오류 발생',
                    description: '추가 도중 오류가 발생했습니다!',
                    positiveText: '확인',
                    negativeText: '취소',
                }));
            }
        });
    }

    const onChangeRating = (rating: number) => {
        setInput({
            ...input,
            rating: rating
        })
    }

    return {onChangeInput, editorRef, onClickSubmit, input, onChangeRating}
}