
// function showUser(user:{name:string}){
//     console.log(user.name)
// }
// showUser({fullname:true})

// function showUser(user:{name:string}){
//     console.log(user.name)
// }
// showUser({name:"saalax"})
// interface User{
// name:string,
// age:number,
// email:string
// }
// type User2=number|string |boolean
// type status="active"|'inactive'|"pending"
// function showUser(user:User){
// console.log(user.age)
// }
// showUser({name:"saalx",age:23,email:'faarax@gmail.com'})

// // read only proporties
// interface book{
//     readonly isbn:string,
//     title:string
// }
// const b:book={
//     isbn:"12345",
//     title:"graad xaaji ismaciil"
// }
// b.isbn="12345"
// optional

// interface profile{
//     username:string,
//     bio?:string
// }
// const pro:profile={
//     username:"homouda"
// }
// console.log(pro)
// // & interface
// interface User1{
//     id:number,
//     name:string
// }
// type admin=User1 & {
// role:"admin"
// }
// const ai:admin={
//     // id:1,
//     // name:"saalx",
//     role:"admin"
// }

// exercise 4 

// q 1
interface User{
    username:string,
    password:string,
    email?:string
}
function Login(user:User){
    console.log(user.username)
}
Login({username:"homouda",password:"1234"})
// q 2
Login({username:"Slax",password:"124",email:"@gmail.com"})
// q 3
interface User1{
    readonly id:number,
    }
    const ui:User1={
        id:1234
    }
    ui.id=1234
