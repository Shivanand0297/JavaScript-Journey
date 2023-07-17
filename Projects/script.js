class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }

  start = () => {
    this.tick();
    this.intervalId = setInterval(this.tick, 1000);
  };

  tick = () => {
    if (this.remainingTime <= 0) {
      this.pause();
    } else {
      this.remainingTime = this.remainingTime - 1;
    }
  };

  pause = () => {
    clearInterval(this.intervalId);
  };

  get remainingTime() {
    return parseFloat(this.durationInput.value);
  }

  set remainingTime(value) {
    this.durationInput.value = value;
  }
}

const durationInput = document.querySelector("#durationInput");
const startButton = document.querySelector("#startButton");
const pauseButton = document.querySelector("#pauseButton");

const timer = new Timer(durationInput, startButton, pauseButton);
