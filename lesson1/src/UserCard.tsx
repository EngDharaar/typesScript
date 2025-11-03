import React, { useState } from 'react'
interface User {
  name:string,
  age:number
}
const UserCard = () => {
  const [username,setUserName]=useState<string>()
  const [count,setCount]=useState<number>(0)
  const [task,setTask]=useState<string[]>()
  // const [data,setData]=useState<{name:string , age:number} | null>(null)
  const [data,setData]=useState<User | null>(null)
  return (
    <div>
      <button onClick={()=>setUserName("homouda")}>Username</button>
      <span>{username}</span>
      <button onClick={()=>setTask(['saalax','nuurto','geesi'])}>Array</button>
      <span>{task}</span>
      
      <button onClick={()=>setCount(count+1)}>Count</button>
      <span>{count}</span>
      <button onClick={()=>setData({name:"homouda" , age:23})}>object</button>
      <span>{data?.name}</span>
      <span>{data?.age}</span>
    </div>
  )
}

export default UserCard