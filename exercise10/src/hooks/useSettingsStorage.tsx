import { useEffect, useState } from "react";

function useSettingStorage (key:string,initialValue:string):[{language:string,notification:boolean},(value:{language:string,notification:boolean})=>void]{
const [user,setUser]=useState(()=>{
    const storage=localStorage.getItem(key)
    return storage ? JSON.parse(storage) : initialValue
})
useEffect(()=>{
     localStorage.setItem(key,JSON.stringify(user))
},[key,user])
 return [user,setUser]
}
export default useSettingStorage