const revealButton = document.querySelector(".reveal-btn");

const hiddenContent = document.querySelector(".hidden-content");

// creating callback function

function revealContent(){
    if(hiddenContent.classList.contains("reveal-btn")){
        hiddenContent.classList.remove("reveal-btn");
    }
    else{
        hiddenContent.classList.add("reveal-btn")
    }
} 

// adding event listner on revealbutton

revealButton.addEventListener("click", revealContent);
