// let Name:string="john";
// let num:number=123;
// let state:boolean=true
// // console.log("hellow",myName)
// let data:any="hellow";
// data=false
// console.log(data.toFixed(2))

// let input:unknown;
// input="saalx"
// if(typeof input ==='string')
// console.log(input.toUpperCase())

// exercise one
// let productName:string;
// let prices:number;
// let disAccounts:boolean;
// productName=12;
// prices="saalax";
// disAccounts=12.2
// productName="saalx";
// prices=12;
// disAccounts=true
// function get(price:number,discount:number):number{
//     return price-price*discount
// }
// console.log(get(12,24))
// function getMethods(x:unknown){
//     if(typeof x==="string")
// console.log(x.length)
// }
// getMethods("hellow")

// array
// const users:string[]=["cali","faarax"]

// users.push("geedi")
// let numbers:Array<number>=[1,2,3,4]
// // tuble
// let entry:[string,number]=['faadum',12]

// // excercise two
// // 1
// let numbers:string[]=["salx","saacid"]
// numbers.push(12)
// let grades:number[]=[1,2,3,4]
// grades.push('homouda')
// let state:boolean[]=[true,false]
// state.push('geedi')
// // 2
// let products:string[]=["sharafdin",13,"saacid"]
// // 3
// let locations:[string,number,number]=["moqadisho",12,34]


// function great(name:string):string{
//     return `Hellow ${name.toUpperCase()}`
// }
// console.log(great("homouda"))
// optional paramets

// function test(message:string,userId?:number){
//     console.log(`${message}-${userId}`)
// }
// test('hellow graad',)
// // default
// function welcome(name:string="guest"){
//     return console.log(name)
// }
// welcome()
// // rest Operator
// function rest(numbers:number[]):number{
//    return numbers.reduce((a,b)=>a+b,0)
// }
// console.log(rest([1,2,3]))

// exercise 3
// 1
function fullName(fisrt:string,last:string):string{
    return (`Your FullName${fisrt} ${last}`) 
}
console.log(fullName("faarax","cali")
)
// 2
function registerUser(username:string,isAdmin?:boolean,language:string="eng"){
    return (`${username}${isAdmin},${language}`)
}
console.log(registerUser("homouda"))
// 3
function average(...numbers:number[]):number{
    return numbers.reduce((a,b)=>a*b,1)
}
console.log(average(10,20))

