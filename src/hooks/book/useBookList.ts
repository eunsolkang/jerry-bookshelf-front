import { useEffect, useState } from "react"
import { getBooks } from "../../lib/api";
import { useQuery } from "react-query"

export default function useBookList(){
    return useQuery(['get_books'], getBooks);
}