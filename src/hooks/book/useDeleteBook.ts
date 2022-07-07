import { useEffect, useState } from "react"
import { useMutation, useQuery } from "react-query"
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import bookApi from "../../lib/api/book";
import { closeModal, openModal } from "../../store/slice/modalSlice";

export default function useDeleteBook(){
    const { id } = useParams<{id: string}>();
    const mutation = useMutation((id: string) => bookApi.delete(id));
    const dispatch = useDispatch();
    const history = useHistory();

    const onDeleteBook =() => {
        dispatch(openModal({
            title: '책 지우기',
            description: '정말 책을 지우시겠습니까?',
            positiveText: '확인',
            negativeText: '취소',
            positiveAction: handleDeleteBook,
        }));
    } 

    const handleDeleteBook = () => {
        console.log('머임');
        
        mutation.mutate(id, {
            onSuccess: () => {
                dispatch(closeModal());
                history.push('/');
            },
            onError: () => {
                dispatch(openModal({
                    title: '오류 발생',
                    description: '삭제에 실패했습니다.',
                    positiveText: '확인',
                }));
            }
        })
    }

    return {onDeleteBook}
}