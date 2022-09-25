// TODO: Changing Datatype
// string to number
// let fakeNum = "22";
// let orgNum = Number(fakeNum);
// console.log(typeof(fakeNum));
// console.log(typeof(orgNum));



//TODO: NUmber to string

// let newnum = 84;
// let newstr = String(newnum);
// console.log(newstr);
// console.log(typeof(newstr));


// TODO: Change datatype google it

// TODO: De-Structuring ( A way to unpack and assigned to a distinct variable)

// let scivalues = [2.72, 3.14, 9.81, 37, 100];
// let [e, pi, g, bodytemp, boilp] = scivalues;
// console.log(e);

// let fullstack = [['html', 'css', 'js', 'tailwind'],
//             ['nodejs', 'expressjs', 'mongodb']] ;

// let [frontend, backend] = fullstack;
// console.log(frontend);

//TODO: For skipping of values assingment

// let array1 = [1, 2, 3, 4, 5];
// let [a, , b, , c]= array1;
// console.log(a);
// console.log(b);
// console.log(c);

//TODO: 
// let array2 = [1, 2, 3, 4, 5, 6, 7, 8];
// let [a, b, ...rest] = array2; // in place of rest we can use anything
// console.log(a,b);
// console.log(rest);// remaining values will go in rest

//TODO: ...Spread and rest operator
//  function sum(x, y){
//     return x + y;
// }
// let vari = [5, 7]; //  if there are more than 2 values the only first 2 values will be passed
// console.log(sum(...vari)) //...vari is a spread operator, It spreads the values to passed in the function call
// advantage is the we don't need to change the coding afterwords ...vari will take care of it
// When we destructured an array it is called spread


//  ...Rest operator  TODO: 

// When we destructure values it is called ...rest

/*
function sumAll (...args){
    console.log(args); // storing arrays
    let sum = 0;
    for(let i of args){
        sum = sum + i;
    }
    return sum;
}

console.log(sumAll(1,2,3,4,6,7));
*/

// rest and spread depends on at what time we are using, if we are using while passing an array it will become spread
// if we are passing values it will become rest, it depends on the time they are used.


//TODO: NEW it is a keyword

// Normal object

// let person = {
//     name:"shivanand"
// }
// console.log(person.name);


// let person = new Object(); // this will internally creates a person object as shown above
// person.name = "shivanand"; // assigning key to the person object
// console.log(person);

// TODO: just like inbuilt date function

/*
 function person(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
};

// new memory allocation is being done for shivanand
var name1 = new person ('shivanand','3'); 
console.log(name1);

var name2 = new person ('anshul','6');
console.log(name2);
*/

// TODO: sets and maps 

// let a = [1,2,3,4,4,5,6,7,2,2,3,4,5,5];

// let newset = new Set(a); //sets only stores unique values init
//console.log(newset);

// for iterating inthe set

// for (let i of newset){
//     console.log(i);
// }

//TODO: adding more values into set

// newset.add(0);
// console.log(newset);

// newset.delete(5);
// console.log(newset);



// TODO: Maps
// maps holds key value pairs where key can be of any data type

let temp = new Map();
// console.log(temp);

//getter gets the value and setter sets the value

/*
temp.set('1',"one")
temp.set(1,"one")
temp.set(true,"one")
console.log(temp);
*/

/*
{1:"one"} //object
{1,2,3,4,5,5} //set
{ '1' => 'one', 1 => 'one', true => 'one' } //maps
=> is called as fat arrow
*/

/*
let city = [["india","Delhi"],
            ["Gujrat","surat"],
            ["raj","jaipur"]
        ];

let newmapping = new Map(city);
*/

// console.log(newmapping);
// console.log(newmapping.get("raj"));

// for iterating

// google it
// for(let i of newmapping){
//     console.log(i);
// }

//TODO: forech forof usage in maps

// TODO: CLOSURE

// When inner function access the value of the outer function they are called as closure

// function outer(){
//     let temp = "shiva";
//     function inner(){
//         console.log(temp);
//     }
//     inner();
// }
// outer();

/*
function outer(){
    let var1 = "shiva";
    function inner (){
        console.log(var1);
    }
    return inner;
}
let var2 = outer();
var2();
*/

// Scope: Where to look for things
// Q. what it is that we are looking for
// javascript is a synchronous single threaded language
// In javascript everything happens inside the excution context