import { useEffect } from "react";
import { useState } from "react";

export function useDebounce(value, delay){
    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(()=>{
        const timeId = setTimeout(() => {
            setDebounceValue(value)
        }, delay);

        return ()=>{
            clearTimeout(timeId)
        }
    },[value, delay])

    return debounceValue
}