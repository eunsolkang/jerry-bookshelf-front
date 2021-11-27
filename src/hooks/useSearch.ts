import { useEffect, useState } from "react"

export default function useSearch(){
    const [search, setSearch] = useState<string>('');
    const [choList, setChoList] = useState<string[]>([])

    const onChange = (e: any) => {
        const {name, value} = e.target;

        setSearch(value);
        onChoHangle();
    }

    const onChoHangle = () => {
        const cho = ["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"];
        console.log(search);
        let result = []
        for(let i=0; i<search.length; i++) {
            const code = search.charCodeAt(i)-44032;
           
            if(code>-1 && code<11172) result.push(cho[Math.floor(code/588)]);
        }
        setChoList(result);
        
    }

    useEffect(()=>{
        console.log(choList);
        
    }, [choList])
    return {search, onChange}
}