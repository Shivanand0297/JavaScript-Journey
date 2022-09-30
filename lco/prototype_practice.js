var User = function (firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is ${this.courseCount}`);
    }
}

User.prototype.getFirstName = function(){
    console.log(this.firstName);
}

var name1 = new User ("shiva", 1);
// console.log(name1);
name1.getCourseCount();
name1.getFirstName();
