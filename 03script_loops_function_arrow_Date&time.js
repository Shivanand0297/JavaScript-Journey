// loops
/* for (initialization; condition; increment or decrement)
{
    code statements
}*/

/*
for(let i = 1; i<=5; i++){
    console.log(i);
}

let nam=['shiva','anshul','saini','mani'];
let newnam=[];
for (let i=0; i<nam.length; i++){
    newnam.push(nam[i].toUpperCase());
}
console.log(newnam);*/

// square of array number








// while loop

/*while(condition){
     code statement;
     inrement or decrement;
}*/
// let i=0;
// while(i<=5){
//     console.log(i);
//     i++;
// }

/*
let i=0;
while(i%2==0){
    console.log(i);
    i=i+1;
}*/

// Dowhile loop
/*
let i=0;
do{
    console.log(i);
    i=i+1;
}while(i<=5);*/

// for of loop

// for(let var_nam of array)

// let array = [1,2,3,4,5,5,6];
// for (let array2 of array) {
//     console.log(array2);
// }

// let con = ['india','america','japan','london']

// for (let con2 of con) {
//     console.log(con2[0]);
// }

// for (let i= 1;i<=5;i++){
    
//     if(i==3){
        // break; /* breaks out of the loop */
//     }
//     console.log(i);
// }
/*
for (let i= 1;i<=5;i++){
    
    if(i==3){
        continue; //skips the matched condition
    }
    console.log(i);
}*/


// funtion in js (why? 1. for reusablity 2. less no of line 3. clean and easy to read)

//defination
/*
// function without parameter
function add(){
    let a = 4;
    let b = 5;
    c = a + b;
    console.log(c);
}
add(); //function calling
*/

// function parameter
/*
function add(a,b){ //type of the parameter will automatically assigned to it based on the value of the parameter
    c = a + b;
    console.log(c);
}
add(50,10); //function calling

// 1000lines of code

add(10,90);
*/

// function with return
/*
function printfullname (firstname, lastname){
    let fullname = firstname + " " + lastname;
    return fullname;
}

let full = printfullname('shivanand','prajapati');
console.log(full);
*/

/*
function areaOfCircle (r){
    let area = Math.PI * r * r;
    return area;
}
console.log(areaOfCircle(10));

*/

// sum of all the values of array
/*
function sumOfArray(array_sum){
    let sum = 0;
    for (let i = 0; i<array_sum.length; i++){
        sum = sum + array_sum[i];
    }
    return sum;
}

let array = [1,2,3,4,5,6,7];
// let final_sum = sumOfArray(array);
// console.log(final_sum); or we can use the below shortcut
console.log(sumOfArray(array));
*/

// arrow function in array
// no need of passing parameter in this function
/*let a = () => {
    console.log("this is a arrow function");
}
a();*/

//we can also use it like this
/*
let a = () => console.log("this is a arrow function"); //for n number of variable.
a();
*/
/*
let a = (x) => console.log(x); //for only one variable.
a("this is a arrow function");
*/

/*
const sumOfArray = (...args) =>{
    let sum = 0;
    for (let element of args) {
        sum = sum + element;
    }
    return sum;
};
console.log(sumOfArray(1,2,3,4,5,5));
*/

//DATE AND TIME
/*
let current_date= new Date();
console.log(current_date.getDate());
console.log(current_date.getDay());
console.log(current_date.getFullYear());
console.log(current_date.getHours());
console.log(current_date.getMonth());
console.log(current_date.getTime());
console.log(current_date.toString());
console.log(current_date);
*/