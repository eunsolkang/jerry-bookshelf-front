import { useEffect, useState } from "react"
import { getBookList } from "../lib/api";
import { Book } from "../models/book";



export default function useBook(){
    const [focusBook, setFocusBook] = useState<Book | null>(null);
    const [books, setBooks] = useState<any[]>([]);
    const [previousBook, setPreviousBook] = useState<Book | null>()

    const onOpenBook = (book: Book) => {
        setFocusBook(book);
        setPreviousBook(book);
    }

    const onCloseBook = () => {
        setFocusBook(null)
    }

    const handleBookList = async() => {
        const response = await getBookList();
        console.log(response);
        
        setBooks(response.data);
    }

    useEffect(()=>{
        handleBookList();
    }, [])

    return {focusBook, onOpenBook, books, onCloseBook, previousBook}

    
}