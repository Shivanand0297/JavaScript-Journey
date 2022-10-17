const startStopBtn = document.querySelector("#startStopBtn")

const resetBtn = document.querySelector("#resetBtn")

// variables to hold values

let seconds = 0;
let minutes = 0;
let hours = 0;

// variables for leading zeros
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// varibles for setinterval fucntoin

let timer = "stopped"
let timerInterval = 0;


// function stopWatch

function stopWatch (){

    seconds++;

    if(seconds/60 === 1){
        seconds = 0;
        minutes++;
        if(minutes/60 === 1){
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



    let displayTimer = leadingHours  + ":" + leadingMinutes + ":" + leadingSeconds;
    document.querySelector("#timer").innerHTML = displayTimer;  
}

// let timerInterval = window.setInterval(stopWatch, 1000)

startStopBtn.addEventListener("click", ()=>{
    if(timer==="stopped"){
        timerInterval = window.setInterval(stopWatch, 1000);
        startStopBtn.innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
        timer="stated";
    }else{
        window.clearInterval(timerInterval);
        startStopBtn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        timer="stopped";
    }
});

// adding eventlistner to reset button

resetBtn.addEventListener("click", ()=>{
    leadingSeconds = 0;
    leadingMinutes = 0;
    leadingHours = 0;
    window.clearInterval(timerInterval);
    document.getElementById('timer').innerHTML = "00:00:00";
    startStopBtn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    
})
