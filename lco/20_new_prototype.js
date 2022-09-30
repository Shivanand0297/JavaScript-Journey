//TODO: making prototype(blueprint) for every single user for signup
// recommended to use capital letter 'User' for prototype
var User = function(firstName, courseCount){ //functional way for creating the object
    this.firstName = firstName; // recommended way of defining objects (functional approch)
    this.courseCount = courseCount; 
    this.getCourseCount = function(){ //method
        console.log(`Course count is ${this.courseCount}`);
    }
}

// var name1 = User("shivanand", 2); // will give undefined.
// Whenever we want to define a new object by functional way we use "new" keyword

/*
new: responsible for 
- Using functional syntax of object
- Invoking the constructor and create unique object every single time
- Also take care of "this" keyword and moves it from global object to function user 
*/

// to add properties in the main object prototype without actually changing the code of the main object which can be access by all new users.

User.prototype.getFirstName = function(){ //new also looks for these prototypes which are defined outside the main object to add it into the main object.
    
    console.log(`Your first name is ${this.firstName}`);
}


var name1 = new User("shivanand", 2); //not a regular function call, pointing to function, for regular function call "this" point to window object.
name1.getCourseCount();

// Always check first that property is present in the object or not by hasOwnPropery();
if (name1.hasOwnProperty("firstName")) { // checking if the property is present in the object or not
    
    name1.getFirstName();
}
else console.log("property not present");


var name2 = new User("prajapati", 3);
name2.getCourseCount();
name2.getFirstName();
