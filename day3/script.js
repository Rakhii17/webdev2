// let fruits1 = ['apple',"orange"]
// let fruits2 = ["cherry","banana"]
// console.log(...fruits1,...fruits2)

// let numbers = [11,41,32,48,84];
// let hasEven = numbers.every(x ==>)
// let combined = fruits1.concat(fruits2);
// console.log(combined);

// ternary operator

// condition ? true: false
// let age = 16;
// let canvote = age >= 18 ? "you can vote ": "you can't";
// console.log(canVote)

// let number = 45;
// let EvenOrOdd = number%2==0 ? "number is even":"number is odd";
// console.log(EvenOrOdd)

// let year = 2024;
// let leapyear = year%4==0 & year%100!=0 & year%400==0 ? "year is leap year":"year is not leap year";
// console.log(leapyear)

// const demo=function(){

// }
// const demo=()=>{

// }
// function sample(callback){
//     console.log("sample")
//     callback()
// }
// function test(){
// return function demo(){
    //     console.log("test")
// }
// }
// sample(test)

// function sample(){
//     console.log('sample')
//     return function demo(){
//         console.log("demo")
//         return function test(){
//             console.log("test")
//         }
//     }
// }
// sample()()
// var value = sample()
// let valueTwo = value()
// value();

// settimeout(useCallback,delay)

// settimeout(function(){
//     console.log("hellow,world!");
// },1000);

function demo(){
    console.log("demo")
}
console.assert.log("sample")
function sample(){
    demo()
}
sample()