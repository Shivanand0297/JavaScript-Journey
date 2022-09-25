// user is allowed to make a purchse only if
// logged in
// email is varified
// cardInfo - valid
// If anyone is missing stop the purchase

var isloggedin = true;
var isEmailVarified = true;
var cardInfo = true;
 if (isEmailVarified && isloggedin && cardInfo){
    console.log('allowed to make a purchase');
 }
 else {
    console.log('NOT allowed');
 }