let myHeros = ["thor", "spiderman"]
let dcHeros = ["batman", "black adam", "superman"]

let heropower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`Hitesh is present in all objects`);
}

myHeros.hitesh()

// heyArray -> Total elements are 4

Array.prototype.heyArray = function(){
    console.log(`Total elements are ${this.length}`);
}

//myHeros.heyArray()

//dcHeros.heyArray()

//inheritance

const User = {
    name: "top name",
    email: "example@gmail.com"
}

const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable: false
}

const TSAssistant = {
    makeAssignment: "js assignment",
    fullTime: true,
    __proto__: TeachingSupport
}


// Teacher.__proto__ = User
// Teacher.prototype = User
Object.setPrototypeOf(Teacher, User)
Object.setPrototypeOf(TeachingSupport, Teacher)



//challenge

String.prototype.truelength = function(){
    console.log(`true length is ${this.trim().length}`);
}

console.log("Hitesh".length);
"Hitesh  ".truelength();

//truelength()