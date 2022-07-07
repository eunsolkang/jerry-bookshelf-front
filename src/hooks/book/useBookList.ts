import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import bookApi from "../../lib/api/book";

export default function useBookList(){
    return useQuery(['get_books'], bookApi.getList);
}