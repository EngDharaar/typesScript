import { useEffect, useState } from "react"

function useObjectLocal(key:string,initialValue:string):[{name:string,email:string},(value:{name:string,email:string})=>void]{
      const [value,setValue]=useState(()=>{
        const storage=localStorage.getItem(key)
        return storage ?JSON.parse(storage): initialValue

    })
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[key,value])
    return [value,setValue]
}
export default useObjectLocal