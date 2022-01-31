import { useEffect, useState } from "react"

export default function useSearch(){
    const [search, setSearch] = useState<string>('');

    const onChange = (e: any) => {
        const {name, value} = e.target;

        setSearch(value);
    }
    return {search, onChange}
}