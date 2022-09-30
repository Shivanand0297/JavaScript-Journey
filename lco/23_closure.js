// TODO: Closure

function init() {
    var firstName = "shivanand";
    console.log("I'm init");
    function sayFirstName() {
        console.log(firstName);
    }
    return sayFirstName; // returning the reference of the function sayFirstName()
}

var value = init();
value();  // since reference of the function is passed, the execution context of the function init is not gone, therefore we can use it.

// TODO:

function doAddition(x) {
    return function (y){
        return x + y;
    }
}

var result = doAddition(5)(3); //doAddition()()() this is curring.
console.log(result);

// TODO: another way
// var result = doAddition(5);
// console.log(result(3));

// Execution context of the doAddition() never goes off because still one reference is alive which is function (y)