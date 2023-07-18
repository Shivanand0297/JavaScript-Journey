class Timer {
  constructor(durationInput, startButton, pauseButton, callBacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    if(callBacks) {
      this.onStart = callBacks.onStart;
      this.onTick = callBacks.onTick;
      this.onComplete = callBacks.onComplete;
    }

    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }

  start = () => {
    if(this.onStart){
      this.onStart(this.remainingTime); //update the border
    }
    this.tick();
    this.intervalId = setInterval(this.tick, 50);
  };

  tick = () => {
    if (this.remainingTime <= 0) {
      this.pause();
      if(this.onComplete){
        this.onComplete()
      }
    } else {
      this.remainingTime = this.remainingTime - 0.05;
      if(this.onTick){
        this.onTick(this.remainingTime)
      }
    }
  };

  pause = () => {
    clearInterval(this.intervalId);
  };

  get remainingTime() {
    return parseFloat(this.durationInput.value);
  }

  set remainingTime(value) {
    this.durationInput.value = value.toFixed(2);
  }
}