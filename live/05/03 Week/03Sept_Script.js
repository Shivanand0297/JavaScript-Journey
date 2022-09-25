// Changing One Datatype to another
// String to number
let fakenum = "25";
let org_Number = Number(fakenum);
console.log(org_Number);
console.log(typeof org_Number);

// Number to String
let newNumber = 25;
let orgNum = String(newNumber);
console.log(orgNum);
console.log(typeof orgNum);

// Destructuring and Spreading
// Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable.
// Example;

const scientificConstants = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants;

console.log(gravity);

// Destructuring into two array into different varibales
const fullstack = [
  ["HTML", "CSS", "JavaScript"],
  ["Nodejs", "Express", "MongoDB"],
];

const [frontend, backend] = fullstack;
console.log(frontend, backend);

//If we like to skip on of the values in the array we use additional comma. The comma helps to omit the value at that specific index

const numb = [1, 2, 3];
let [numOne, , numThree] = numb; //2 is omitted
console.log(numOne, numThree);

// We can not assign variable to all the elements in the array. We can destructure few of the first and we can get the remaining as array using spread operator(...).

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, ...rest] = nums;
console.log(num1, num2);
console.log(rest);

// Spread and Rest Operator
console.log("Spread and Rest");
function sumOne(x, y) {
  return x + y;
}
let vari = [5, 7];
console.log(sumOne(...vari)); // Spread

// REST Operator
function sumTwo(...args) {
  console.log(args);
  let sum = 0;
  for (const x of args) {
    sum = sum + x;
  }
  return sum;
}
console.log(sumTwo(1, 2, 3, 4, 5));

// Creating Object with New Keyword
// New is a keyword

let person = {
  name: "Anurag Tiwari",
};
console.log(person.name);
//New
console.log("Using New keyword");

let NewPerson = new Object();
NewPerson.name = "Anurag";
console.log(NewPerson);
console.log(NewPerson.name);

// let now = new Date();
// console.log(now.getFullYear());

//  How we use NEW in real world

var User = function (firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount;
  this.getCourseCount = function () {
    console.log(`Course Count is: ${this.courseCount}`);
  };
};

User.prototype.getFirstName = function () {
  console.log(`Your FirstName is : ${this.firstName}`);
};

var anurag = new User("Anurag", 7);
console.log(anurag);
// console.log(anurag.getCourseCount());
anurag.getCourseCount();
anurag.getFirstName();

// Sets and Maps in javascript
// Set is a collection of elements. Set can only contains unique elements. Let us see how to create a set in the section below.

// Set is a collection of elements. Set can only contains unique elements. Let us see how to create a set in the section below.

// Creating an Empty Set
let companies = new Set();
console.log(companies); // Set(0) {}

let prgmLan = [
  "html",
  "css",
  "js",
  "html",
  "css",
  "python",
  "nodejs",
  "express",
  "nodejs",
];

let lang = new Set(prgmLan);
console.log(lang);

for (let i of lang) {
  console.log(i);
}

// Creating and Empty Set and Adding the vlaue
let comp = new Set();
console.log(comp);
console.log(comp.size);

comp.add("iNeuron");
comp.add("LCO");
comp.add("iNeuron");
comp.add("findcoder");
comp.add("CoderCommunity");
comp.add("Pensil");
console.log(comp);
console.log(comp.size);
comp.delete("LCO");
console.log(comp);
comp.clear();
console.log(comp);

// Maps
// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.
// A Map has a property that represents the size of the map.
// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
console.log("Map Start Here");
let map = new Map();

console.log(map);

// Exaplanning What is getter and setter

map.set("1", "str1"); // a string key
map.set(1, "num1"); // a numeric key
map.set(true, "bool1"); // Boolean Key
console.log(map);

console.log(map.size);

console.log(map.get("1"));

// Creating Map with Array
countries = [
  ["India", "Delhi"],
  ["Gujarat", "Surat"],
  ["Rajasthan", "Jaipur"],
];
const mapp = new Map(countries);
console.log(mapp);
console.log(mapp.size);

console.log(mapp.get("India"));

// Checking key in Map
// Check if a key exists in a map using has method. It returns true or false.

console.log(mapp.has("India"));

// Getting all values from map using loop

for (let [key, value] of mapp) {
  console.log(key, value);
  console.log(`The Key is ${key} and Value is ${value}`);
}

for (let key of mapp.keys()) {
  console.log(key);
}
for (let values of mapp.values()) {
  console.log(values);
}

mapp.forEach((keys) => console.log(keys));
mapp.forEach((keys, values) => console.log(keys, values));

// Clouser
// JavaScript allows writing function inside an outer function.
// We can write as many inner functions as we want.
// If inner function access the variables of outer function then it is called closure.

function outer() {
  let varibale = "Seven";
  function inner() {
    console.log(varibale);
  }
  inner();
}
outer();

// Clouser
console.log("Clouser Start");
function oouter() {
  let var1 = "Anurag";
  function iiner() {
    console.log(var1);
  }
  return iiner;
}

// oouter()();
let var2 = oouter();
// console.log(var2);

var2();

// Confusing Example
function sum(x) {
  return function summ(y) {
    return x + y;
  };
}
console.log(sum(5)(20));

// SCOPE
// - Where to look for things
// - Q. What that we are looking for

// All varibales are either receiving the assignment of same values or you are retrieving the value from a variable.

// JavaScript Organize scope with function and blocks

// Scope
// Execution Context
// Call Stack
// Hoisting
// Lexical Scope

// Hoisting Code
// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code. Hoisting allows functions to be safely used in code before they are declared.

// Stage 1
// console.log("Hoisting ");
// var xyz = "Hello";
// function call() {
//   console.log("Hola FSJS");
// }
// console.log(xyz);
// call();

// Stage 2

console.log(xyz);
call();
console.log("Hoisting ");
var xyz = "Hello";
function call() {
  console.log("Hola FSJS");
}

Aadetya;
