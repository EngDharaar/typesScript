import { useEffect, useRef, useState } from "react"
interface User {
    name:string,
    email:string,
    phone:string
}
const TypeEffect = () => {
    const [user,setUser]=useState <User [] >([])
    const inputRef=useRef<HTMLInputElement>(null)

    // const [user,setUser]=useState <User | null>(null)
    useEffect(()=>{

// fetch(('https://jsonplaceholder.typicode.com/users'))
// .then(res=>res.json())
// .then(data=>setUser(data))
const fethUser=async()=>{
    const responce=await fetch('https://jsonplaceholder.typicode.com/users')
    const data : User []=await responce.json()
    // setUser(data [0])
    setUser(data)
}
fethUser()

    },[])

    useEffect(()=>{
    if(inputRef.current){
    inputRef.current.focus()

    }
},[])
console.log("users",user)

    // return <pre>{JSON.stringify(user)}</pre>
  return (
    <>
    <input type="text" 
    ref={inputRef}
    placeholder="enter your name"
    />
    {/* object */}
        {/* {user?.name}
        {user?.phone} */}

        {/* array */}
        {
            user.map((user)=>(
                <div>
                    <h1>{user.name}</h1>
                    <h1>{user.email}</h1>
                </div>
            ))
        }
    </>
  )
}

export default TypeEffect