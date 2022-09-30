function hello() {
    var firstName = 'shivanand';
    function sayfirstName() {
        console.log(firstName);
    }
    sayfirstName();
}
hello();
console.log(firstName); // will give reference error, because once the execution context of function hello is done the var firstName is not available