import type React from "react"
import { useState } from "react"
interface formProps {
    onSubmit:(data:string)=>void
}
const Dhacdooyin = ({onSubmit}:formProps) => {
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log("change",e.target.value)
    }
    const handleClick=(e:React.MouseEvent<HTMLButtonElement>)=>{
         console.log("first")
    }
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{

    }
    const [input,setInput]=useState('')
    const handleSubmits=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
     onSubmit(input)
    }
    console.log("input",input)
    
  return (

    <div>
        <input type="text" 
        onChange={handleChange}
        />
        <button 
        onClick={handleClick}
        >click me </button>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" />
        </form>
        <form onSubmit={handleSubmits} action="">
            <h3>haraaryo</h3>
            <input type="text" 
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setInput(e.target.value)}
            />
            <button>submit</button>
        </form>
    </div>
  )
}

export default Dhacdooyin