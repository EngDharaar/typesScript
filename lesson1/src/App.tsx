import './App.css'
import Dhacdooyin from './Dhacdooyin'
import UserCard from './UserCard'

function App() {
  const handleFormInput=(input:string)=>{
    console.log(input)
  }
  return (
    <>
<h1>hello</h1>
<UserCard/>
<Dhacdooyin submit={handleFormInput}/>
    </>
  )
}

export default App
