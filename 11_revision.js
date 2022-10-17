// JavaScript Rivision / Interview 

/* TODO: basic
Q1. first name of javaScript
    - Mocha
Q2. launched year of js
    -1995
    -Initially designe for front end

Q3. Which tool we use to run js code inside the vscode editor
    - node.js

Q4. can we run js in browser
    - in console, 
*/

/**
 * TODO: 
 *   let, const, var
 * 5. let and const are introduced ES6
 *  - what functionality ES6 brings (read it)
 * 
 * 6. what is variable
 *  - use to store values of different datatypes
 *  - hoisting
 * 7. two catagories of data types
 *  - primitive and non primitive or primitive and objects
 * 
 *  - primitive - stores only one type of value
 *  - non-primitive - stores different type of value
 *  array is non primitive
 * 
 * 8. all the data type
 *  - number, string, null, undefined, boolean
 *      - difference beetween null and undefind (both are empty value) TODO: 
 * 
 *  - nonPrimitive (array, objects, functions also)
 */

// Math (math is object with which will invoke all the method in it)

// const PI = Math.PI;
// console.log(PI)

// console.log(Math.round(4.2))

// console.log(Math.min(2, 45, 5));

// TODO: Strings

let user1 = 'string'
let user2 = "string"
let user3 = `string` // (ES6)

// string is stroed in the formate of array 
// console.log(user1.toLowerCase());
// console.log(user1.toLocaleLowerCase());

/* 
user1.toUpperCase()
user1.toLowerCase()
user1.substring()
user1.substring()
user1.split()
user1.trim()
user1.includes()
user1.replace()
user1.charAt()
user1.indexOf()
user1.concat()
user1.startsWith()
user1.endsWith()
user1.search()
user1.match()
user1.matchAll()
user1.repeat()
 */


// TODO: truthy and falsy value
/*
- anything which result to true are truthy value
- anything which result to false are falsey value
    - undefined
    - null
    - 0
    - ""
    - NaN
- All the no.(+,-) except 0 and all the string empty string and boolean truthy value

- 0, null, undefined, nan, false, "" are falsy value.

*/

// TODO: read coercion in javascript

// TODO: Operators

// arithmetic (+, -, *, /, %, **)
// assingment (=)
// comparision operators (==, ===, <, >, <=, >=, !=)
// logical operator (||, &&)

// ternary operator (condition) ? //truecode : //falsecode

// TODO: conditions

// if, if else, if else if else if else, switch, ternary operator


// FIXME: loops: for, forof, while, dowhile

let i;
for(i=0; i<5; i++){
    // console.log(`${i}`);
}

// FIXME: Array

/**
 * -concat
 * -indexof
 * -includes
 * -isarray
 * -tostring
 * -join
 * -split
 * -slice
 * -lastindexof
 * -push
 * -pop
 * -shift
 * -unshift
 * -reverse
 * -sort
 * -log
 */

let names = {
    anurag: 97, 
    student: ["1", "3", "4"],
    name: function (){
        return this.anurag
    },
}
// console.log(names.student);
// console.log(names.name());

// FIXME: Date()

/**
 * getfullyear()
 * getmonth()
 * getdate()
 * gettime()
 * getminutes()
 * getseconds()
 */

//TODO: functions

// function abc (){

// }
// abc()

// const ads = (){
    
// }
// ads()
/* 
function addition (){   // without passing parameters.
    let sum = 0;
    console.log(arguments)  //objects of key value pairs.
    for(let i = 0; i<arguments.length; i++){
        sum+= arguments[i];
    }
    return sum;
}

console.log(addition(10,20,50,10));
 */

// TODO: arrow functions

const abc = ()=>{

}

//FIXME: read about arrow function

/**
 * hoisting
 * scope
 * execution context
 * call stack
 */

// FIXME: HOF- A callback is a function which can be passed as a parameter to other functions.

// callback
// setInterval
// setTimeout

/* function greeting (name, callBack){
    console.log("hello", name)
    callBack();
}
function callBack(){ // as we are accessing it inside the greeting function we need to pass it as a argument in the greeting call
    console.log("i am call back")
}

greeting("name", callBack)
 */

//TODO: doubt
/* 
function greeting (name, callBack){
    console.log("hello", name)
    callBack();
    againCallBack();
}
function callBack(){ // as we are accessing it inside the greeting function we need to pass it as a argument in the greeting call
    console.log("i am call back")
    function againCallBack(){
        console.log("again Call back");
    }
}

greeting("shiva", callBack) */

/* 
const callBack = (n)=>{
    return n**2;
}

function squ(callback, n){
    return callBack(n)*n
}

console.log(squ(callBack, 5)) */

// function user (){
//     console.log("hello");
// }

// setTimeout(user, 1000);

// FIXME: filter, forEach


const greet = ["hi", "hello", "hola", "bonjore", "gracious"]



/* greet.forEach((e, index, array)=>{
    console.log(e.toUpperCase(), index, array);
})
 */

// Map
// filter
// reduce

const num = [1,2,3,4,5];
const bb = num.map(v=> v*v)
// const bb = num.map((v)=> {
//     return v*v;
// })

//console.log(bb);    // modify array
//console.log(num);   // original array

const arr = ["spain", "india", "germany", "irland"]

const result = arr.filter((e)=>{
    //  return e.includes("ia");
    return e.includes("i","a");
})

// console.log(result);

//TODO: reduce

const example = ["shiva", "akash", "saini", "anshul"]

const ress =  example.sort((a, b)=>{
 if (a < b){
    return -1;
 }
 return 1;
})

// console.log(ress);

//TODO: Destructuring, rest and spread

function sum (x, y){ 
    return x + y ;
}

array = [1, 2];
let sol =  sum(...array) //spread
// console.log(sol);

function addition (...rest){
    // console.log(rest); //arrayS
}

addition(1, 2, 3, 4, 5, 6)


// TODO: read about new

// FIXME: set and map

// - set contains only unique elements

let tech = new Set();
tech.add("shiva")


let mapvar = new Map();
// console.log(mapvar)
mapvar.set("1", "value1")
mapvar.set(true, 2)

// console.log(mapvar);

// console.log(mapvar.get("1"))    // to access the keys
// console.log(mapvar.get(true))    // to access the keys

// TODO: closure when inner function variable can access the value of the outer fucntion variable

//TODO: read:temporal dead zone, global executon context

// TODO: try catch block


// FIXME: promise
// callback, .then .catch, async, await
/* 
const makePromise = new Promise((resolved, rejected)=>{
    console.log(`Getting the api`);
    setTimeout(()=>{
        const courses = ["html", "css", "javascript", "tailwind"]
        if(courses.length>1){
            resolved("done!");
        }else{
            rejected("rejected")
        }
    },2000);

});

makePromise.then((result)=>{
    console.log(result);
}).catch((result)=>{
    console.log(result);
}) */


// TODO: Async await


function uno(){
    return `one`
}
function dos(){
    return new Promise((resolve, rejected)=>{
        setTimeout(()=>{
            resolve("two");
        },1000)
    })
}
function tres(){
    return `three`
}

const call = async()=>{
    let one = uno();
    console.log(one);
    
    let two = await dos();
    console.log(two);
    
    let three = tres();
    console.log(three);
    
}
// call()


// FIXME: fetch

const url = "https://restcountries.com/v2/all"; //Countries API

fetch(url)
.then((result)=>result.json())
.then((data)=>{
    // console.log(data);
}).catch((error)=>{
    // console.error(error);
});

// TODO: DOM

