// TODO: Classes

class User {
    constructor(name, email){ //constructor is a method which runs as soon as a object is created.
        this.name = name;
        this.email = email;
    }

    cousreList = []; //public to all
    #cousreList = []; //Private to this class
    
    getInfo() {
        return {
                name: this.name, 
                email: this.email
               }; //returning object. we can also return key or a variable
    }

    //method to add courses inside courseList

    enrollCourse(courseName){ //setter, needs parameters
        this.#cousreList.push(courseName);
    }
    getCourseList(){  //getter: giving the result, so dont need parameter
        return this.#cousreList;
    }

    login(){ 
        return "You are logged in"
    }

    // static login(){ //static restricts it from getting inherited
    //     return "You are logged in"
    // }
}

// one way to access the class

//let shivanand = new User("Shivanand", "shivanand@dev");

// but we keep our classes seperate and use it in some other file

module.exports = User; // passing User class in export module

// after studying from 28classes.js file

const rock = new User ("rock","rock@rock.com");

console.log(rock.getInfo());

rock.enrollCourse("React Bootcamp");
console.log(rock.getCourseList());
console.log(rock.cousreList); // output is same if we dont use #courseList, so why we need getCourseList() method, if we can directly access courselist by rock.courseList

// Why we are doing this? because getCourseList() can access the private variables
// and rock.courseList cant access the private variable, it will give undefined.

// TODO: Inheritance

// creating another class

// class subAdmin { // this is a symple class

// }

//making subAdmin a child of User class, now subAdmin can access all whatever it is presents in the User class

class subAdmin extends User {
    constructor(name, email){
        super(name, email);
    } 
    getsubAdminINfo(){
        return "You are a subadmin"
    }
    login(){ 
        return "login for admin only"
    }
}

// now how can we create a object from subAdmin class

const tom = new subAdmin("tom", "tom@tom.com");
console.log(tom.getsubAdminINfo());  //this method is defined in the subAdmin class
console.log(tom.login()); //this method is defined in User class, we can access it because subadmin is child of User this is called Inheritance

// login method is also defined in the User class so it overrides it and use the method defined in subadmin class, otherwise will use User login method
 
console.log(tom.getInfo()); //defined in User

/* Current output
You are a subadmin
You are logged in
{ name: undefined, email: undefined }
*/

// why there is undefined in name and email
// because we did not define the parameters in the subadmin class in the constructor