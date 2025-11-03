import { useState } from "react"

interface User {
    id:number,
    task:string,
    done:boolean
}
const TodoList = () => {
    const [items,setItems]=useState('')
    const [todo,setTodo]=useState<User[]>([])
    const handleaddItems=()=>{
        if(!items.trim()) return 
        const newItems:User={
            id:Date.now(),
            task:items,
            done:true
        }
        setTodo([...todo,newItems])
    }
  return (
    <div>
        <h2>Todo-list</h2>
         <input type="text" 
         placeholder="enter any item"
   onChange={(e)=>setItems(e.target.value)}
         />
         <button 
         onClick={handleaddItems}
         >add Item</button>
         <ul>
            {
                todo.map(item=>(
                    <li>{item.task}</li>
                ))
            }
         </ul>
    </div>
  )
}

export default TodoList