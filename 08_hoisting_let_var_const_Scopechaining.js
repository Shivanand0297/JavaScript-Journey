// TODO: Hoisting: When we are able to excess anything before it is declared called as hoisting

/*
console.log(name);
sum()

var name = "shivanand";
function sum (){
    console.log("hello");
}
*/

// TODO: let, var, const ->study from google .

// let: let is stored inside global in a different scope called script

/*
{
    var a = 10;
    console.log("19", a);
    {
        let b = 20;
    }
    console.log("23", b); // can't access b outside the scope
}
console.log("25", a);   // a is accessable because it is declared with var: which is global variable
console.log("26", b);   // can't access b outside the scope

const c;
c=19; // gives error "Missing initializer in const declaration" we have to assign the value on the spot like: const c = 19;

*/

// TODO: temporal dead zone: the time interval the system takes to assign the value of the variable from undefined state is temporal dead zone

// TODO: Homework 

/*
- scope 
    - scope chaining 
    - lexical (english) scope 
- execution context 
- schrounous and multi threaded
- call stack 
- working of function inside javascript 
- hoisting in javascript
- let var and const
- temporal dead zone
- types of error(3 type)
*/

// TODO: always use 'let' & 'const' and, try to use 'const' maximum time1


