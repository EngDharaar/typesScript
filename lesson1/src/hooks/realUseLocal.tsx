import { useEffect, useState } from "react";

function realUseLocal<T>(key:string ,initialValue:T):[T,(value:T)=>void]{
const [value,setValue]=useState<T>(()=>{
 const storage=localStorage.getItem(key)
 return storage ? JSON.parse(storage):initialValue
})
useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(value))
},[key,value])
return [value,setValue]
}
export default realUseLocal