let fruits1=["apple", "orange"]
let fruits2=["cherry","banana"]
console.log(...fruits1,...fruits2)



// terniary operator

// console.log([...fruits1,...fruits2])   
// let age = 18;
//  let canVote = age>=18? "you can vote ": "you cant";
//  console.log(canvote);
   
// check if the no is even or odd
let num = 18;
let canVote = num%2==0? "even":"odd";
console.log(canVote )



// year is leap or not

let year = 2018;
let leapyear =year%4==0 & year%100!=0 & year%400 ==0? "year is leap year": "year is not leap year";
console.log (leapyear) 

//first class fucntion 
// const demo =(){

// }
// const demo=()=>{

// }
// function sample(callback){
//     console.log("sample")
//     callback()
// }

// function test() {
//     return function demo(){
//         console.log("test")
//     }
// }
// sample (test)


// function sample(){
//     console.log('sample')
//     return function demo(){
//         console.log("demo")
//         return function test(){
//             console.log("test")
//         }
//     }
// }

// sample()()()

// var value= sample()
// let valueTwo = value()
// valueTwo();


settimeout(callback, delay) 

setttimeout (function)
setInterval function(){
    console.log("hello, world")
}
