// TODO: scope: where to look for things
// Q. what is that we are looking for

// TODO: javascript is a synchronous, single threaded language means 
// synchronous: means one by one
// single threaded: means one step at a time and if one step is taking long, the next step wont be executed

var count = 10;
var count2 = 20;
function fullName() { // global excution context cant excess variable from inside function/local excution because there values are assinged for there scope only and as soon as execution of the function done the values will disappeared.
    var fName = "Shivanand";
    var lName = "Prajapati";
    console.log(fName, lName);
}
fullName();
