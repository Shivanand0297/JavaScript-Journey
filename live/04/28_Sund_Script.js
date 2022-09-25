// Number
// String
// Array
// object

// let userDetails = {
//   firstName: "Anurag",
//   lastName: "Tiwari",
//   role: "admin",
//   loginCount: 25,
// };
// console.log(userDetails.firstName);
// console.log(userDetails["lastName"]);
// console.table(userDetails);
// userDetails.loginCount = 27;
// console.log(userDetails);

// Mini Program
// Method in Object
// let userDetailCourse = {
//   firstName: "Anurag",
//   lastName: "Tiwari",
//   role: "Student",
//   googlelogin: true,
//   courseList: [],

//   buyCourse: function (coursename) {
//     this.courseList.push(coursename);
//   },
//   getcoursecount: function () {
//     return `${this.firstName} is enrolled in  ${this.courseList.length} courses`;
//   },
// };

// console.log(userDetailCourse.firstName);
// userDetailCourse.buyCourse("Pro Backend");
// console.log(userDetailCourse.courseList);
// userDetailCourse.buyCourse("React Js");
// console.log(userDetailCourse.courseList);
// console.log(userDetailCourse.getcoursecount());

// // Keys
// console.log(Object.keys(userDetailCourse));
// //Values
// console.log(Object.values(userDetailCourse));

// //Checking Key
// console.log(userDetailCourse.hasOwnProperty("firstName"));

// for of with array
// for in with Object

// For in Loop
// let userDetails = {
//   firstName: "Anurag",
//   lastName: "Tiwari",
//   role: "admin",
//   loginCount: 25,
// };

// for (let x in userDetails) {
//   //   console.log(x);
//   //   console.log(userDetails[x]);
//   console.log(`Key is ${x} and Value is ${userDetails[x]}`);
// }

// Higher Order function
// Call back function

// let isEven = (ele) => {
//   return ele % 2 == 0;
// };

// let value = [2, 4, 7, 8].every(isEven);
// console.log(value);

// Mini Program
// For Square
// const callback1 = (n) => {
//   return n ** 2;
// };
// Fucntion to multiple square with other number
// Do the square and then multiple
// function cube(callback1, n) {
//   return callback1(n) * n;
// }
// console.log(cube(callback1, 3));
// function course() {
//   console.log("Welcome to Full stack JavaScript Web developer Bootacmp ");
// }
// setTimeout(course, 3000);

// setTimeout(() => {
//   console.log("Welcome to Full stack JavaScript Web developer Bootacmp ");
// }, 3000);

// // Set Interval

// setInterval(() => {
//   console.log("Hello ");
// }, 3000);

// let arr = ["Hey", "hi", "hello", "Hola", "Namste"];
// arr.forEach((val) => {
//   console.log(val);
// });

//Map

// let numbers = [1, 2, 3, 4, 5, 6];
// let store = numbers.map((num) => num * num);
// console.log(store);

// let names = ["HiteshSir", "SuryaSir", "ANurag", "PrasaD"];
// let store1 = names.map((name) => name.toUpperCase());
// console.log(store1);

//Filter

// let country = ["India", "japan", "Kenya", "Irelnd", "Canada", "Germany"];
// // let store = country.filter((country) => country.includes("an"));
// let store = country.filter((country) => country.length === 5);
// console.log(store);

let numbers = [1, 2, 3, 4, 5, 6, 7];

//Syntax:
// arrayName.reduce(acc,curr)=>{},value)
let sum = numbers.reduce((acc, cur) => acc + cur, 2);
console.log(sum);
