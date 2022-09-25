// Error Handling
// JavaScript provides an error-handling mechanism to catch runtime errors using try-catch-finally block.

// Syntax:
/*
    try{
        //code
    }catch(err){

    } finally {

    }
*/
//try: wrap suspicious code that may throw an error in try block.The try statement allows us to define a block of code to be tested for errors while it is being executed.

// catch: write code to do something in catch block when an error occurs. The catch block can have parameters that will give you error information. Catch block is used to log an error or display specific messages to the user.

// finally: finally block will always be executed regardless of the occurrence of an error. The finally block can be used to complete the remaining task or reset variables that might have changed before error occurred in try block.

try {
  let firstname = "Anurag";
  console.log(firstname + " " + lastname);
  //   throw "Hello World";
} catch (err) {
  //   console.log(e);
  console.log(err.name);
  console.log(err.message);
} finally {
  console.log("Completed");
}

// throw is Homework

// Different Type of Errors
/*
    - ReferenceError: An illegal reference has occurred. A ReferenceError is thrown if we use a variable that has not been declared.
    - SyntaxError: A syntax error has occurred
    - TypeError: A type error has occurred
*/

// promises
