var authenticated = false;

// if(authenticated){
//     console.log('Sign out button');
// }
// else{
//     console.log('Login button');
// }

//ternary operator
// authenticated ? console.log('Signout') : console.log('Login');

// switch case

var user = "subadmin";

switch (user) {
    case "admin":
        console.log('You have full access');
        break;
    case "subadmin":
        console.log('You have half access');
        break;
    case "testprep":
        console.log('You have test access');
        break;
    case "user":
        console.log('You have content access');
        break;
    case "trail":
        console.log('You are just playing around');
        break;

    default:
        break;
}