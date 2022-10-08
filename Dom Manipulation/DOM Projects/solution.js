// TODO: Q2

/*
let productList = [];

let list = document.querySelectorAll(".as-imagegrid-item")

for(let i of list){
    productList.push(i.innerText)
}
console.log(productList);
*/

// TODO: Q3

/*
let sec = document.createElement("section");

sec.classList.add("parent")
sec.style.padding= ".875rem 3.25rem .875rem 1.75rem"
sec.style.color= "#1f1f1f"
sec.style.fontSize= "1rem"
sec.style.fontWeight= "500"
sec.style.lineHeight= "1.25rem"
sec.style.borderTop= "thin solid #a9acaa"
sec.style.margin= "0"


let faq = document.createTextNode("My New FAQ");
sec.appendChild(faq)

let appendList = document.querySelector(".main-content .article");
appendList.appendChild(sec)

*/

//TODO: Q4

/*
let contact = document.querySelector(".customer-support .one-tel-number")
contact.innerHTML = "+91 7905200354"
*/

//TODO: Q5

/*
let search = document.querySelector("input");
search.addEventListener("mouseenter", ()=>{
    search.style.backgroundColor = "red";   
});
*/

// TODO: Q8
/*
    let language = document.querySelector("#SIvCob");
    let links = language.querySelectorAll("a");

    for (let i=0; i<links.length; i=i+2) {
        language.removeChild(links[i]);
    }
    console.log(links);
*/

//TODO: Q10

/*
let span = document.querySelector(".btn-cta-big .login-btn-text")
span.addEventListener("mouseover", ()=>{
    span.style.backgroundColor = "red";
});
*/

// span.addEventListener("mouseleave", ()=>{
//     span.style.backgroundColor = "transparent";
// });

//TODO: Q11

/*
let backgroundImage = document.querySelector(".header .wrapper .logo .icon");
backgroundImage.style.backgroundImage = "url()"
*/

//TODO: Q17

/*
document.querySelector(".btn-container .btn").innerHTML = new Date().toString();
*/

//TODO: Q19

let logo = document.querySelector(".navbar-brand");
let link = logo.childNodes[1].currentSrc;
console.log(link);