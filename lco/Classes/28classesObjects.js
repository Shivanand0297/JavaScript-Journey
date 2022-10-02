// import User from "./27classes"; //not going to work, will work in some other frameworks

// importing User from 27classes.js file
const User = require("./27classes");

// making new object named as shivanand
const shivanand = new User("shivanand", "shivanand@lco.dev") //constructor is a method which runs as soon as a object is created.

console.log(shivanand.getInfo());
// can also use this to get name. since object is being returned
// console.log(shivanand.getInfo().name);

shivanand.enrollCourse("FullStack JS course");

shivanand.enrollCourse("Web Development");

console.log(shivanand.getCourseList());

let courses = shivanand.getCourseList();

for (const c of courses) {
    console.log(c); //will print all in string
}