import { useEffect, useState } from "react"

export default function useBook(){
    const [focusBook, setFocusBook] = useState<number>(-1);
    

    const onOpenBook = (index: number) => {
        setFocusBook(index);
    } 
    return {focusBook, onOpenBook}
}