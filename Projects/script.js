const durationInput = document.querySelector("#durationInput");
const startButton = document.querySelector("#startButton");
const pauseButton = document.querySelector("#pauseButton");
const circleSvg = document.querySelector("circle");

const perimeter = 2 * Math.PI * circleSvg.getAttribute("r");
circleSvg.setAttribute("stroke-dasharray", perimeter);

let totalDuration;
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalTime) {
    totalDuration = totalTime; // callback function to make border for timer when the timer starts
  },
  onTick(remainingTime) {
    circleSvg.setAttribute("stroke-dashoffset", (perimeter * remainingTime) / totalDuration - perimeter);
  },
  onComplete() {
    console.log("timer completed");
  },
});
