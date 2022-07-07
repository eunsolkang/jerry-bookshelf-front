import { useQuery } from "react-query"
import { useParams } from "react-router-dom";
import bookApi from "../../lib/api/book";

export default function useBookById(){
    const { id } = useParams<{id: string}>();
    return useQuery(['get_book', id], () => bookApi.getById(id));
}