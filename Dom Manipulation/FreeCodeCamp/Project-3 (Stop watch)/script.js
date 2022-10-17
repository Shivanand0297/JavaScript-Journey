// variables for buttons

const startStopBtn = document.getElementById("startStopBtn")
const restBtn = document.getElementById("resetBtn")

// variables to hold the time values

let seconds = 0;
let minutes = 0;
let hours = 0;

// variables for leading 0

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// variables fo set interval and timerstatus

let timerInterval = null;
let timerStatus = "stopped"


// Stop watch function

function stopwatch(){
    seconds++
    if (seconds / 60 === 1){
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }
    }

    if(seconds<10){
        leadingSeconds = "0" + seconds.toString();
    }else{
        leadingSeconds = seconds;
    }

    if(minutes<10){
        leadingMinutes = "0" + minutes.toString();
    }else{
        leadingMinutes = minutes;
    }

    if(hours<10){
        leadingHours = "0" + hours.toString();
    }else{
        leadingHours = hours;
    }

    
    // to display in the browser
    let displayTimer = document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;   
}

// window.setInterval(stopwatch, 1000)

// we need to store the status of the stop watch and setinterval function in some variables

// we need that on click the timer should run

startStopBtn.addEventListener("click",()=>{
    if(timerStatus === "stopped"){
        timerInterval = window.setInterval(stopwatch, 1000)
        startStopBtn.innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`
        timerStatus = "started";
    }else{
        window.clearInterval(timerInterval);    //passing interval reference in the clear function so that each time this starts from the value it pause to.
        startStopBtn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        timerStatus = "stopped";
    }
})

restBtn.addEventListener("click",()=>{
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('timer').innerHTML = "00:00:00";
    startStopBtn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    timerStatus = "stopped";
});








