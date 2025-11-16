import { useEffect, useState } from "react";

function useLocalStorage <T>(key:string, initialValue:T):[string,(value:T)=>void]{
 const [value,setValue]=useState(()=>{
    const storage=localStorage.getItem(key)
    return storage ? JSON.parse(storage):initialValue
 })
 useEffect(()=>{
localStorage.setItem(key,JSON.stringify(value))
 },[key,value])
 return [value,setValue]
}
export default useLocalStorage