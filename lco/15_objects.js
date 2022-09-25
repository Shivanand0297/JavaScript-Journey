/*var user = {
    firstName: 'shivanand',
    lastName: "prajapati",
    role: 'Admin',
    loginCount:32,
    facebookSignedIn: true
};

console.log(user.firstName); //widely used way
console.log(user["firstName"]); //not recomended;

console.log(user.loginCount);

user.loginCount = 44;
console.log(user.loginCount);
console.table(user);

*/



// objects in depth

var user = {
    firstName: 'shiva',
    lastName: 'prajapati',
    role: 'admin',
    loginCount: 32,
    facebookSignedIn: true,
    courseList: [],
    buycourse: function (courseName){
        this.courseList.push(courseName);
    },
    getCourseCount: function (){
        return `${this.firstName} is enrolled in ${this.courseList.length} Courses`;
    },
    info: function (){
        return ` 
        ${this.firstName},
        ${this.lastName},
        ${this.role},
        ${this.facebookSignedIn},
        ${this.courseList}`;
    }
    
};

// var courseList = true;

//console.log(user.firstName);

console.log(user.getCourseCount());

user.buycourse('JavaScript Bootcamp');

console.log(user.getCourseCount());
console.log(user.info());

