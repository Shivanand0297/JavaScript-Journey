// targeting all the cards

const cards = document.querySelectorAll(".card")
cards.forEach((c)=>{
    c.addEventListener("click", flip)
})

// variables declarations
let firstCard, secondCard = null;
let isFlipped = true;

function flip(){
    
    // console.log("flipped");
    this.classList.add("flip"); //card is flipped now
    
    // now we need to keep the track on which card we are clicking, for that we need to declare the variables
    if(isFlipped){
        isFlipped = false;
        firstCard = this;
        // console.log(`first card:`,firstCard)
    }
    else{
        secondCard = this
        // console.log(`second card:`,secondCard)
        // now we need to check both the cards if they are same or not
        // we will do it by funciton checkIt()
        checkIt();
    }
}

function checkIt(){
    // console.log("checking..");
    (firstCard.dataset.image === secondCard.dataset.image) ? success(): failed();
}

function success(){
    console.log("matched!!");
    firstCard.removeEventListener("click", flip)
    secondCard.removeEventListener("click", flip)
    setTimeout(()=>{
        const congrats = document.createElement("h1");
        congrats.style.color = "#FFFFFF"
        congrats.style.fontSize = "4rem"
        congrats.style.position = "absolute" 
        congrats.style.top = "-13%" 
        congrats.style.left = "22%" 
        const msg = document.createTextNode("YOU WON!!")
        congrats.appendChild(msg);
        const gameConstainer = document.querySelector(".gameContainer");
        gameConstainer.appendChild(congrats)
    },200)
    // calling a funciton to reset back to default state
    reset();
}

function failed(){
    setTimeout(()=>{
    console.log("failed!!");
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
    },300)
    
}

function reset(){
    console.log("reseting...");
    firstCard, secondCard = null;
    isFlipped = true;
    // console.log("All reseted now");
    setTimeout(()=>{
        console.log("All reseted now");
    },300)

}

// now reshuffling the cards on every reload

window.addEventListener("load", ()=>{
    console.log("Reshuffling..")
    cards.forEach((card)=>{
        let flexOrder = Math.floor(Math.random()*16);
        card.style.order = flexOrder;
    })
})