import './App.css'
import Dhacdooyin from './Dhacdooyin'
import realUseLocal from './hooks/realUseLocal'
// import useLocalStorage from './hooks/useLocalStorage'
// import useNumberLocal from './hooks/useNumberLocal'
import TypeEffect from './TypeEffect'
import UserCard from './UserCard'

function App() {
  // const [user,setUser]=useLocalStorage('user','homouda')
  // const [score,setScore]=useNumberLocal('score',99)
  const [value,setValue]=realUseLocal<number>('score',90)
  const [user,setUser]=realUseLocal('user',{name:'saalax',email:"email@gmile.com"})
  // const [user,setUser]=realUseLocal('user','homouda')
  const handleFormInput=(input:string)=>{
    console.log(input)
  }
  return (
    <>
    <p>{value}</p>
    <p>{user.email}</p>
    <button onClick={()=>setValue(888)}>add score</button>
    <button onClick={()=>setUser({name:'eng homouda',email:"homouda@gmail.com"})}>add user</button>
<TypeEffect/>
<UserCard/>
<Dhacdooyin submit={handleFormInput}/>

    </>
  )
}

export default App
