import { useState } from "react"
import TodoList from "./TodoList"
interface Todo {
  id:number,
  task:string,
  done:boolean
}
function App() {

  const [count,setCount]=useState<number>(0)
  const [user,setUser]=useState<{userName:string,email:string, age:number} | null>(null)
  const [decrease,setDecrease]=useState<number>(100)
  const [task,setTask]=useState<Todo |  null>(null)
  const [newTask,setNewTask]=useState<string>()



  return (
    <>
    {/* exercise one */}
    <button
    onClick={()=>setCount(count+1)}
    >increase</button> 
    <span>{count}</span>
    <button
    onClick={()=>setDecrease(decrease-1)}
    >Decrease</button> 
    <span>{decrease}</span>
    {/* exercise two */}
       <button
       onClick={()=>setUser({userName:"homouda ⭐", email:" homouda@gmail.com 📌" , age:27})}
       >Display Object</button>
       <span>{ user?.userName  }</span>
       <span>{   user?.email   }</span>
       <span>{user?.age}</span>
       {/* exercise three */}
    
      <TodoList/>
     </>
  )
}

export default App





