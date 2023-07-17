const durationInput = document.querySelector("#durationInput");
const startButton = document.querySelector("#startButton");
const pauseButton = document.querySelector("#pauseButton");

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log("timer started"); // callback function to make border for timer when the timer starts
  },
  onTick() {
    console.log("ticked down");
  },
  onComplete() {
    console.log("timer completed");
  },
});
