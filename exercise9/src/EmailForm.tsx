import { useState } from "react"
interface emailProps {
    onSubmits:(data:string)=>void
}
const EmailForm = ({onSubmits}:emailProps) => {
    const [emailInput,setEmailInput]=useState<string>('')
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault()
onSubmits(emailInput)
    }
  return (
    <div>
        <form 
        onSubmit={handleSubmit}
        action="">
           <input type="text"
           onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setEmailInput(e.target.value)}
           />
           <button>submit</button>

        </form>
    </div>
  )
}

export default EmailForm