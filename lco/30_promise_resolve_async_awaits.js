// TODO: event loop

const uno = () =>{
    return "one";
};

// const dos = () =>{
//     setTimeout( ()=>{ 
//         return "An api request or data from server"; 
//     }, 3000 )
// };

const dos = () =>{
    return new Promise((resolve, reject) => { //either the request will complete or it will fail
        setTimeout(() => {
            resolve ("api request from web")
        }, 3000);
    })
};

const tres = () =>{
    return "three";
};

/* previousy calling like this
dos()
uno()
tres()
*/

/* 
we  want to create some variable which calls this methods and holds
the value and probably then we want to do console.log
*/

// function to call above functions methods

const callMe = async () => { //making entire method asynchronous
    
    let valOne = uno();
    console.log(valOne);
    
    let valTwo = await dos(); // wait for dos to complete its operations
    console.log(valTwo);
    
    let valthree = tres();
    console.log(valthree);

/* Output: without asyn, wait, promise
   one
   undefined // because the value is not assigned immediately, it is assiging after 3sec and we expect that we will get it immediately (some api request can takes longer to execute)
   three
*/
    

}

callMe()
