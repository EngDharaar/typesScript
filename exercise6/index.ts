
// function setRole(role){
//     if(role==='admin'){
//         console.log("working correct")
//     }
// }
// setRole('admin')

// type Role="Superadmin" | "guest" | 'mentor'

// function setRole (role:Role){
//     if(role==='admin'){
//         console.log("correct✅")
//     }
// }

// enum Role{
//  admin="admin",
//  mentor="mentor",
//  guest="guest"
// }
// function setRole (role:Role){
//     if(role===Role.admin){
//         console.log("work correct✅")
//     }
// }
// setRole(Role.admin)

// as

// const button=document.querySelector('button') as HTMLButtonElement
// button.disabled=true


// exercise 6
// q1
enum UserRole{
  Superadmin="superAdmin",
  Moderator="Moderator",
  Viewer="Viewer"
}

function canEditor(role:UserRole){
    if(role===UserRole.Viewer){
        console.log("false ❌")
    }else{
        console.log("True ✅")
    }
}
canEditor(UserRole.Moderator)

// q2 
const button=document.querySelector("button") as HTMLButtonElement
button.disabled= true