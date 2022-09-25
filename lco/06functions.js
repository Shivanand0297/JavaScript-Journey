/*function sayHello (name){
    console.log('hi there shiva');
    // console.log(`hi there ${name}`);
    return 'shivanand';
}

console.log(sayHello()); */

/*
Define a function that can answer the role of a user. 
A user can be on following roles:
admin - with all access
subadmin - with acccess to create/delete courses
testprep - with access to create/delete tests
user - consume all content
other - trial user.

Input: getUserRole(name, role)
*/

/*
function getUserRole (name, role){
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
            break;
        case "subadmin":
            return `${name} is subadmin with create and delete courses`;
            break;
        case "testprep":
            return `${name} is testprep with create and delete tests access`;
            break;
        case "user":
            return `${name} is user to consume content`;
            break;
            default:
            return `${name} is a trial user`;
            break;
    }
}

console.log(getUserRole("shiva","testprep"));
*/


var getUserRole = function (name, role){
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
            // break;
        case "subadmin":
            return `${name} is subadmin with create and delete courses`;
            // break;
        case "testprep":
            return `${name} is testprep with create and delete tests access`;
            // break;
        case "user":
            return `${name} is user to consume content`;
            // break;
            default:
            return `${name} is a trial user`;
            // break;
    }
}

console.log(getUserRole("shiva","testprep"));
