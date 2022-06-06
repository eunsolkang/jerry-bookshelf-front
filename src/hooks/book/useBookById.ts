import { useEffect, useState } from "react"
import { getBookById, getBooks } from "../../lib/api";
import { useQuery } from "react-query"
import { useParams } from "react-router-dom";

export default function useBookById(){
    const { id } = useParams<{id: string}>();
    return useQuery(['get_book', id], () => getBookById(id));
}