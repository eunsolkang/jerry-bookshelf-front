import { useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { searchState, changeValue } from "../store/slice/searchSlice";

export default function useSearch(){
    const searchValue = useSelector(searchState);
    const dispatch = useDispatch();

    const onChange = useCallback((e)=>{
        const {name, value} = e.target;
        dispatch(changeValue(value));
    }, [dispatch])

    return {searchValue, onChange}
}