// Event delegation - it allows a user to append a single event listner to a parent element that adds it to all of its present and the future decendents that match a selector.

e.target.matches('li')  // to select li on button click 

// targeting parent element to add event listner to all of its childs.

document.querySelector("#parent").addEventListener("click",(e)=>{
    console.log(e.target.getAttribute("id") + "is clicked")

    const target = e.target;
    if(target.matches("li")){
        target.style.backgroundColor = "red"; 
    }

}) 

