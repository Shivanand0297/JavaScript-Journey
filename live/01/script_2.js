// let rating = 4;

// if (rating == 5) {
//   console.log("Excellent");
// } else if (rating == 4) {
//   console.log("Rating 4");
// } else {
//   console.log("Not Given");
// }

// console.log("Completed");

// let email = false;
// let Mobile = true;
// if (email == true || Mobile == true) {
//   console.log("Redirect to homepage");
// } else if (Mobile == true && email == false) {
//   console.log("Redirect to Email Verification");
// } else if (Mobile == true && email == false) {
//   console.log("Redirect to Email Verification");
// } else {
//   console.log("Create your account");
// }

// condition ? expression : expression

var loggedin = false;
loggedin ? console.log("HOME PAGE") : console.log("Login First");
if (!loggedin) {
  console.log("login first");
} else {
  console.log("Home Page");
}
