import { useState } from "react"
import useNumberStorage from "./hooks/useNumberStorage"
import useSettingStorage from "./hooks/useSettingsStorage"
import useLocalStorage from "./hooks/useLocalStorage"




function App() {

const [value,setValue]=useNumberStorage("users","homouda")
const [user,setUser]=useSettingStorage('news',{language:'english',notification:"true"})
// generic hooks
const [hook,setHook]=useLocalStorage("cust","nuur cawaale")
const [huge,setHuge]=useLocalStorage("array",{lang:"somali pro",noti:true})
  return (
    <>
    <p>{user.language}</p>
    <button onClick={()=>setUser({language:"english pro",notification:true})}>add lang</button>
    <button onClick={()=>setValue("eng homouda 🌍")}>add number storage</button>
    <p>{value}</p>
    {/* Generic hooks */}
    <p>{hook}</p>
    <p>{huge.lang}</p>
    <button onClick={()=>setHook("costomer cawaale")}>add hook</button>
    <button onClick={()=>setHuge({lang:"somali pro",noti:true})}>add huge..</button>
   
    </>
  )
}

export default App

