// TODO: Event Capturing 
// TODO: Target 
// TODO: Event Bubbling 

// to change the content of the button on click

button.addEventListner("click",(e)=>{
    e.target.innerText = "clicked";
}, true) //capturing

// true: capturing
// false: bubbling (By default)

// TODO: to stop event propogation


button.addEventListner("click",(e)=>{
    e.stopEventPropgation() // propogation will stop at this button

}, true)

// TODO: to make event occure once


button.addEventListner("click",(e)=>{
    e.stopEventPropgation() 
    
}, {once: true})  // event will only occure one time

// TODO: to prevent the default behaviour of the <a> </a> link tag

button.addEventListner("click",(e)=>{
    e.preventDefault()
    
})