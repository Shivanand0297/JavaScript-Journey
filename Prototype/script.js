let myHeros = ["thor", "spiderman"];
let dcHeros = ["batman", "superman", "black adams"];

let heropower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// I'm defining a javascript library in which anybody defines any method or object
// should get a function "shiva" by default and this function should says hitesh is present in all objects

Object.prototype.shiva = function () {      // adding in all the objects
    console.log(`Shiva is every where`);
}

// lets see if myHeros can access "shiva" method

myHeros.shiva(); // array will also get this method because it is inheriting the objects


// write a method that will add heyArray function in every array.

Array.prototype.heyArray = function (){
    console.log(`Total elements are ${this.length}`);
}

myHeros.heyArray(); //this is pointing to myHeros
dcHeros.heyArray(); //this is pointing to dcHeros

// inheritence


const User = {
    name: "Top Name",
    email: "email@email.com"
}

// Now i want that all the properties that are present in the User should be present in the teacher as well

const Teacher = {
    makeVideos : true,
}

const TeachingSupport = {
    isAvailabe: false  // and now we want to access all the functionality of "User" as well "Teacher"

}
// One way for this is 
// Teacher.__proto__ = User;

// other way for this is 
// Teacher.prototype = User;  // not used now-a-days

// best approch is

Object.setPrototypeOf(Teacher, User); // latest syntax  (Teacher wants to access the prototype of user)

Object.setPrototypeOf(TeachingSupport, Teacher);


// adding functionality to the string by default

String.prototype.truelength = function (){
   let len =  this.trim().length;
    console.log(len);
}


"shivaaa  ".truelength();
"   shivanand  ".truelength();