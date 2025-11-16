import { useEffect, useState } from "react";

function useNumberStorage (key:string,initialValue:string):[string,(value:string)=>void]{
const [value,setValue]=useState<string>(()=>{
    const storage=localStorage.getItem(key)
    return storage ? JSON.parse(storage):initialValue
})
useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(value))
},[key,value])
return [value,setValue]
}
export default useNumberStorage