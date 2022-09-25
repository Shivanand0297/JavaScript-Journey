// Error Handling or Exception Handling TODO:

/*
    try { //try will run the program and if there is any error in the program "catch" will take care of it



    }catch(var_name){  //catch will take care of the error

    }
    finally { // finally will run at any given cost

    }
    throw{ //google it

    }
*/

// try: wrap up the code which can throw the error
// catch: write the code to do somthing when error is occured
// finally: it will always excute

try {
    let firstName = "shivanand";
    console.log(firstName + " " + lastName);
}
catch(anyErr){
   // console.log(anyErr);
    console.log(anyErr.name);
    console.log(anyErr.message);
}
finally{
    console.log("Important Operations");
}

// google throw

// TODO: types of error

// reference error: when we are pointing to somthing and it is not present inside the memory

// Syntax error: When we messed up with the set of rules

// type error: const a = 19; a=44; this is type error we are changing the variable which is declared as const.

