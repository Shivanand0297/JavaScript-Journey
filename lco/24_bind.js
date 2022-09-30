// TODO: when we want to use the method given to some other object in another object we use TODO: bind.

const shivanand = {
    firstName: "shivanand",
    lastName: "prajapati",
    role: "admin",
    courseCount: 3,
    getInfo: function(){
        console.log(`
            First Name is ${this.firstName}
            Last Name is ${this.lastName}
            and enrolled in ${this.courseCount} courses
            his role is ${this.role}
        `);
    }
};

const saini = {
    firstName: "priyanka",
    lastName: "saini",
    role: "bff",
    courseCount: 1,
};

/*
shivanand.getInfo();
saini.getInfo(); // will give error because getinfo method is not defined inthe object saini. to make it work we use bind
*/

// bind always returns the reference of the function

var info = shivanand.getInfo.bind(saini);
info();

// shivanand.getInfo.bind(saini)(); // another way

// TODO: call: works almost same as bind this will automatically logs the value

shivanand.getInfo.call(saini);