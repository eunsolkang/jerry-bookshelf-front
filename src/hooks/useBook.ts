import { useEffect, useState } from "react"
import { getBookList } from "../lib/api";
import { Book } from "../models/book";



export default function useBook(){
    const [focusBook, setFocusBook] = useState<Book | null>(null);
    const [books, setBooks] = useState<Book[]>([]);
    const [previousColor, setPreviousColor] = useState<string | null>()

    const onOpenBook = (book: Book) => {
        setFocusBook(book);
        setPreviousColor(book.background_color);
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

    return {focusBook, onOpenBook, books, onCloseBook, previousColor}

    
}