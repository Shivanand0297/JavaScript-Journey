// TODO: event loop

const uno = () =>{
    console.log("one");
}

const dos = () =>{
    setTimeout( ()=>{  // waiting for image to load, not a good practice because some data may be dependent on this, there are other ways to do it (by asyn way)
        console.log("image"); 
    }, 3000 )
    console.log("two");
}

const tres = () =>{
    console.log("three");
}

dos()
uno()
tres()
