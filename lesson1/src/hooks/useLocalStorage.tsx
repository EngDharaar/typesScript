import { useEffect, useState } from "react"

function useLocalStorage(key:string,initialValue:string):[string,(value:string)=>void]{
      const [value,setValue]=useState<string>(()=>{
        const storage=localStorage.getItem(key)
        return storage ?? initialValue

    })
    useEffect(()=>{
        localStorage.setItem(key,value)
    },[key,value])
    return [value,setValue]
}
export default useLocalStorage