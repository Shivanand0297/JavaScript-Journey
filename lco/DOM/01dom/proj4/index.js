// first we need to target the card element

const cards = document.querySelectorAll(".card");

// TODO: variables

var firstCard, secondCard = null;   //can also do var firstCard = null;
var isFlipped = false;

cards.forEach(c => {
  c.addEventListener("click", flip)
});



 function flip () {
  
  // console.log("flipped");
  
  // console.log(this);  // this is holding the card on which we are clicking
  this.classList.add("flip");  // here we can click on all cards

  // we need to keep the track on which cards we are clicking
  if (!isFlipped) {
    isFlipped = true;    // so that next time it fails the condition
    firstCard = this;   // holding the first card
  }
  else {
    secondCard = this;   // clicking second time
    console.log(firstCard);
    console.log(secondCard);
    checkIt();  
  }

}


function checkIt(){
  // console.log("Checking...");
  (firstCard.dataset.image === secondCard.dataset.image) ? success() : fail();
}

function success  () {
  // console.log("Success");
  firstCard.removeEventListener("click", flip)
  secondCard.removeEventListener("click", flip)
  reset()
}


function fail  () {

  // console.log("Failed");
  // firstCard.classList.remove("flip");
  // secondCard.classList.remove("flip");
  // fliping back in happening so fast that we cant see that, so we need to wait for some time

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 500); // during this time interval 'this' is constantly over loading and context of 'this' is all messed up. So we need to reset all 

}


function reset  () {
  let firstAndSecondCard = [null, null];
  let [firstCard, secondCard] = firstAndSecondCard; //destructured way

  // let firstCard, secondCard = null; //simple way

  isFlipped = false;
}

//TODO: function for shuffle

function shuffle (){
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
}; //  self executing anonymous function: it will shuffle as soon as the script loads

window.addEventListener("load", shuffle)