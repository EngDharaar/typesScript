import { useEffect, useState } from "react"

function useNumberLocal(key:string,initialValue:number):[number,(value:number)=>void]{
      const [value,setValue]=useState<number>(()=>{
        const storage=localStorage.getItem(key)
        return storage ? parseInt(storage) :initialValue

    })
    useEffect(()=>{
        localStorage.setItem(key,value.toString())
    },[key,value])
    return [value,setValue]
}
export default useNumberLocal