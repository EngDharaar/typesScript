
// function echo(data){

// return data}
// const result=echo(1234)
// console.log(result.toUpperCase())
function echoString(data:string):string{
    return data
}
const result=echoString("saalx")
console.log(result.toUpperCase())
function echoNumber(data:number):number{
    return data
}
const numbers=echoNumber(1234)
console.log(numbers)
// generate
function echo<T>(data:T):T{
    return data
}
const names=echo("saalax")
console.log(names)
const numbers1=echo(12)
console.log(numbers1.toFixed(2))
const bol=echo(true)
console.log(bol)
// reusable array function
function echoArray<T>(items:T[]):T{
    return items[0]
}
const arrayName=echoArray(["fadumo","geedi"])
console.log(arrayName)
const arrayNumber=echoArray([1,2,3,4])
console.log(arrayNumber.toFixed(2))
// generate interface
interface ResponceData<T>{
    success:boolean,
    data:T
}
const responceString:ResponceData<string>={
    success:true,
    data:"Done"
}
const responceNumber:ResponceData<number>={
    success:true,
    data:1234
}
const responceObject:ResponceData<{name:string,age:number}>={
    success:true,
    data:{name:"saalx",age:123}
}

// exercise 5
// q1

function echoExercise<T>(data:T):T{
    return data
}
const nameEcho=echoExercise<string>("saalx")
const number=echoExercise<number>(10)
function arrayEcho<T>(data:T[]):T{
    return data[0]
}
const array=echoExercise(['axmad','nuur'])
const onject=echoExercise({name:"saalx",number:1234})

// q2

interface ExResponce <T>{
    success:boolean,
    data:T
}

const exerNumber:ExResponce<number>={
    success:true,
    data:12
}
const exObject:ExResponce<{name:string,age:number}>={
    success:true,
    data:{name:'homouda',age:27}
}
// q3
function exArray <T> (items:T[]):T{
    return items[0]
}
const stringEx=exArray<string>(['saalax','yuusuf'])
const numberEx=exArray<number>([10,20])
