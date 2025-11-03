import AgeForm from './AgeForm'
import './App.css'
import ContactForm from './ContactForm'
import EmailForm from './EmailForm'

function App() {
const handleSubmit=(data:string)=>{
  console.log("data",data.toUpperCase())

}
  const handleAge=(data:number)=>{
 console.log("data",data)
  }
  const handleContact=(data:{name:string,email:string})=>{
console.log(data)
  }

  return (
    <>
       <EmailForm onSubmits={handleSubmit}/>
    <AgeForm data={handleAge}/>
    <ContactForm onSubmit={handleContact}/>

    
    </>

  )
}

export default App
