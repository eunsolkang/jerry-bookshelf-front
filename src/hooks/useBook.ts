import { useEffect, useState } from "react"
import { getBookList } from "../lib/api";
import { bookType } from "../models/book";



export default function useBook(){
    const [focusBook, setFocusBook] = useState<number>(-1);
    const [books, setBooks] = useState<bookType[]>([]);

    const onOpenBook = (index: number) => {
        setFocusBook(index);
    } 

    const handleBookList = async() => {
        const list:bookType[] = await getBookList() ?? [];        

        setBooks(list);
    }

    useEffect(()=>{
        handleBookList();
    }, [])

    return {focusBook, onOpenBook, books}

    
}