// Hoisting

console.log(call);
var xyz = "Hello";
function call() {
  console.log("Hola FSJS");
}
console.log(call);

// Scenario two

var xyz = "Hello";

var call = () => {
  console.log("Hola FSJS");
};
console.log(call);

// showing it on browser

var abc = 7;
function getname() {
  console.log("Hello World");
}

getname();
console.log(abc);
