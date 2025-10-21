// function echo(data){
// return data}
// const result=echo(1234)
// console.log(result.toUpperCase())
function echoString(data) {
    return data;
}
var result = echoString("saalx");
console.log(result.toUpperCase());
function echoNumber(data) {
    return data;
}
var numbers = echoNumber(1234);
console.log(numbers);
// generate
function echo(data) {
    return data;
}
var names = echo("saalax");
console.log(names);
var numbers1 = echo(12);
console.log(numbers1.toFixed(2));
var bol = echo(true);
console.log(bol);
// reusable array function
function echoArray(items) {
    return items[0];
}
var arrayName = echoArray(["fadumo", "geedi"]);
console.log(arrayName);
var arrayNumber = echoArray([1, 2, 3, 4]);
console.log(arrayNumber.toFixed(2));
