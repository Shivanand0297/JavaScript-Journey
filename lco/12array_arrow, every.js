// basic function
/*
function isEven (number){
    if (number%2===0){
        return true;
    }
    return false;
}
console.log(isEven(4));
*/

// arrow function

/*
var isEven = (number) => {
    return number % 2 === 0;
}
// console.log(isEven(4));
var result = [2,4,6,8].every(isEven);
console.log(result);
*/

// callback with arrow function

var result = [2,4,6,8].every((element) =>{ return element % 2 === 0;}); // when we use {} we got to return somthing
console.log(result);

// can also use
var result = [2,4,6,8].every((element) => element % 2 === 0);
console.log(result);

//much better way

var result = [2,4,6,8].every((element) => (element % 2 === 0));
console.log(result);

