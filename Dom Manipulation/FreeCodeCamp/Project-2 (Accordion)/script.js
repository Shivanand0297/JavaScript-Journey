// variables

const accordion = document.getElementsByClassName("content-container");
console.log(accordion);
for ( i=0; i<accordion.length; i++) {
    accordion[i].addEventListener("click",(e)=>{
        e.target.parentElement.classList.toggle("active")  
    })
}