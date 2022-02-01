import { useEffect, useState } from "react"
import { getBookList } from "../lib/api";
import { Book } from "../models/book";



export default function useBook(){
    const [focusBook, setFocusBook] = useState<Book | null>(null);
    const [books, setBooks] = useState<Book[]>();
    const [previousBook, setPreviousBook] = useState<Book | null>()

    const onOpenBook = (book: Book) => {
        setFocusBook(book);
        setPreviousBook(book);
    }

    const onCloseBook = () => {
        setFocusBook(null)
    }

    const handleBookList = async() => {
        const list:Book[] = await getBookList() ?? [];        

        setBooks(list);
    }

    useEffect(()=>{
        handleBookList();
    }, [])

    return {focusBook, onOpenBook, books, onCloseBook, previousBook}

    
}