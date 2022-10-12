// function for generating random hexcode

function hexColorCode(){
    const randomString = "0123456789ABCDEF";
    let hashCode = "#";
    for(let i=0; i<6; i++){
        let hexnumber = randomString[Math.floor(Math.random() * 16)];
        hashCode+= hexnumber;
    }
    return hashCode;
}

// targeting the button
let btn = document.querySelector("#button");

// tageting the canvas background
let canvas = document.querySelector("#canvas");

// adding event listner
btn.addEventListener("click", ()=>{
    canvas.style.backgroundColor = hexColorCode();
})


