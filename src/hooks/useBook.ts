import { useEffect, useState } from "react"
import { getBookList } from "../lib/api";

export default function useBook(){
    const [books, setBooks] = useState<any[]>();

    const handleBookList = async() => {
        const response = await getBookList();
        
        setBooks(response.data);
    }

    useEffect(()=>{
        handleBookList();
    }, [])

    return {books}
}