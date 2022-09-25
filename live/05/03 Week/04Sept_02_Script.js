// Scope: Where to look for things
// Q. What is that we are looking for

// JavaScript is a synchronous, single Threaded language.

// synchronous means to be in a sequence, i.e. every statement of the code gets executed one by one. So, basically a statement has to wait for the earlier statement to get executed.

// JavaScript is a single-threaded language, which means it has only one call stack that is used to execute the program. The call stack is the same as the stack data structure that you might read in Data structures.

// Everything in JavaScript Happens in Execution context

// program for execution context
var name = "Anurag";
var lastname = "Tiwari";
function fullname() {
  var company = "ineuron";
  return company;
}
console.log(name);
var funName = fullname();
console.log(funName);

// Showing them HTMl and JS Example (Folder)

// Call stack maintain the order of Execution of Execution Context
// I will do google and show
/*
    * Different Name:
    - Execution Conetxt Stack
    - Program Stack
    - Control Stack
    - Runtime Stack
    - Machine Stack
*/

// Hoisting
//JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code. Hoisting allows functions to be safely used in code before they are declared.

// getname();
// console.log(x);
var x = 7;
function getname() {
  console.log("hello world");
}
// console.log(x);
// getname();

// -------------------------------
// Understanding working Function and understanding Scope

var gravity = 9.8;
function ineuron1() {
  var gravity = 9.81;
  console.log(gravity);
}
function ineuron2() {
  var gravity = 9.81111;
  console.log(gravity);
}
console.log(gravity);
ineuron1();
ineuron2();

// Global Scope // space
// Anything written outside of any block is called as global scope or global space.

// Exaplnning loosely typed (Weekly typed) language versus Strongly typed language

// Scope Channing (Scope or Lexical Environment)

function xyz() {
  console.log(abc);
  function xxyyzz() {
    console.log(abc + "Inside");
  }
  //   xxyyzz();
}
var abc = 10;
xyz();

// Difference between var, let and Const
// ---- 1 ------
// console.log(b);
// let a = 10;
// var b = 16;

// ---- 2 ------
console.log(a);
let a = 10;
var b = 16;

// Temporal Dead Zone : The let and const variables are not accessible before they are initialized with some value, and the phase between the starting of the execution of block in which the let or const variable is declared till that variable is being initialized is called Temporal Dead Zone for the variable.

// Redeclaration of variable using let

// let a = 10
// let a = 20

// Expalaning difference between let var and const.

// ----
// Bloack Scope (Also Called Compound Statement)
{
  var aa = 10;
  let ab = 20;
  const abc = 30;
}

// Shadowing

var aaa = 100;
// let bb = 2000
{
  var aaa = 10;
  let bb = 20;
  const c = 30;
}
console.log(aaa);
console.log(bb);

/*
Js
Data types
variables
conditions
Math functions
Arrays and methods of array
Loops
Functions, arrow functions
Objects
Date
Higher order functions
Functional programming - foreach, every, map, filter, reduce, sort
Destructing
Type coversions
Spread operator
Rest
Functions with new keyword
Set
Maps
Closures

Js is a Synchronous single threaded  language and it is inside the execution context

Exception handling in js

Reference error, syntax error type error

Hoisting

Var vs const vs let
 
Function scopes- lexical scope chaining


Temporeror dead zone

*/
