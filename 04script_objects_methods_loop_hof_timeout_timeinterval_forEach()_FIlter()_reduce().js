// TODO:  objects and methods

let userCourseDetail = {
    firstName: 'shivanand',
    lastName: 'prajapati',
    roll: 'student',
    facebookLogin: true,
    courselist: [],
    buycurses: function (coursename){
        this.courselist.push(coursename);
    },
    courseCount: function(){
        return `${this.firstName} is enrolled in ${this.courselist.length} courses`;
    },
};
userCourseDetail.buycurses('javascript');
userCourseDetail.buycurses('React JS');

//console.log(`${userCourseDetail.courselist}`);
userCourseDetail.courseCount();
//console.log(`${userCourseDetail.courseCount()}`);

// TODO: to get keys

console.log(Object.keys(userCourseDetail));

// TODO: TO get values

console.log(Object.values(userCourseDetail));

// to check wether key is present in the object or not

//console.log(userCourseDetail.hasOwnProperty('roll'));

// TODO: for in loop for object

// for (let x in userCourseDetail){
//     //console.log(`key is ${x} and value is ${userCourseDetail[x]}`);
//     console.log(`key is ${x} and value is ${userCourseDetail[x]}`);
// }


// TODO:higher order function

// TODO: function for squaring

// const square = (n) => {
//     return n**2;
// }

// let cube= function (square, n){
//     return square(n)*n;
// }
// console.log(cube(square, 3));



// TODO: set timeout

// setTimeout(() => {
//     console.log('hey!');
// }, 3000);

// function timeout() {
//     console.log('hey!');
// }
// setTimeout(timeout, 3000);

//  TODO:set interval

// function test(){
//     console.log('hey there');
// }

// setInterval(test, 1000)
// setInterval(() => {
//     console.log('another one'); 
// }, 2000);

//  TODO:forEach() will only iterate through tha array

/*
const array = [12,33,44,53,65];
array.forEach((values)=>{
    console.log(values);
});
*/

//  TODO:map iterate and modify the original array

// let names = ['shiva','saini','mani','anshul'];
// let caps = names.map((name)=>name.toUpperCase());
// console.log(caps);

//  TODO:filter()

// let country = ['india','japan','spain','garmeny','ARGENTINA'];

// let result = country.filter((country)=>country.includes('an'));

// console.log(result);

// let result2 = country.filter((country)=>country.length===5)

// console.log(result2);

// let result3 = country.filter((country)=>country.match('ARGENTINA'))

// console.log(result3);


// TODO: reduce();
// syntax: arrayName.reduce((acc,current)=>acc+current,0) 
// acc= accumulator

let numbers = [1,2,3,4,5,6,7];
let sum = numbers.reduce((acc,curr) => acc + curr,0); //0 value can be negative also
console.log(sum);

// TODO: Revise the following
/*
data types, variables
- bolean null undefined
- conditions
- switch case
- math functions
- arrays
//- loops(for dowhile while forof forin)
- functions (without, with parameter, arrow function )
- date
- objects
- hof(higher order function - callback, setinterval, settimeout)
- functional programing (foreach, map, filter, reduce, every)
- functional programing Sort
*/