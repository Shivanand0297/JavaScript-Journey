//setTimeout(function, milliseconds)
//setInterval(function, milliseconds)

var counter = document.querySelector(".counter");  //Documents because every thing is in document
var followers = document.querySelector(".followers"); //Same selectors as in css

var count=0;

setInterval( () => { //call back
    if (count<1000){
        count++;
        counter.innerText = count;
    }

} ,1);

setTimeout( () => {
    followers.innerText = "Followers on Instagram!"
}, 4200)