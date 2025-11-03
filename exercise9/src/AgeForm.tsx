import { useState } from "react"
interface AgeProps {
    data:(data:number)=>void
}
const AgeForm = ({data}:AgeProps) => {
    const [age,setAge]=useState<number>(0)
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(typeof age==='number' && age > 18){
        data(age)
        }
       
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="number"
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setAge(parseInt(e.target.value))}
            />
            <button>submit</button>
        </form>
    </div>
  )
}

export default AgeForm