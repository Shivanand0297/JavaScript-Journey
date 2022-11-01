// cashing the dom
// TODO: 1
const musicContainer = document.querySelector(".music-container");
const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const audio = document.querySelector("#audio");
const progressContainer = document.querySelector(".progress-container");
const progress = document.querySelector(".progress");
const title = document.querySelector("#title");
const cover = document.querySelector("#cover");
const volumeEL = document.querySelector("#volume");
const volumeLevel = document.querySelector("#volume-level");

// song title
// TODO: 2
const songs = [
  "Castle of glss-Linkin Park",
  "In the end-Linkin Park",
  "NewDivide-Linkin Park",
  "Numb-Linkin Park",
];

// keep track of songs
// TODO: 3
let songIndex = 1;

const loadSong = (song) =>{
    title.innerText = song;
    audio.src = `../music/${song}.mp3`;
    cover.src = `../images/${song}.jpg`;
}

// initially loads the song
loadSong(songs[songIndex])

// TODO: 5
const playSong = () =>{
    musicContainer.classList.add("play")
    // changing icon from play to pause
    playBtn.querySelector("i.fa").classList.remove("fa-play")
    playBtn.querySelector("i.fa").classList.add("fa-pause")

    // html audio tag had its own api and methods
    audio.play(); // TODO: new
}

// TODO: 6
const pauseSong = () =>{
    musicContainer.classList.remove("play")
    // changing icon from play to pause
    playBtn.querySelector("i.fa").classList.add("fa-play")
    playBtn.querySelector("i.fa").classList.remove("fa-pause")
    audio.pause();
}

// TODO: 8
const prevSong = () =>{
    songIndex--
    if(songIndex < 0){
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex])
    playSong()

}

// TODO: 9
const nextSong = () =>{
    songIndex++
    if(songIndex > songs.length-1){
        songIndex = 0;
    }
    loadSong(songs[songIndex])
    playSong()
}

// TODO: 11
const updateProgress = (e) =>{
    // e.srcElement.duration
    // e.srcElement.currentTime
    const { duration, currentTime} = e.srcElement; //destructuring
    const progressPercentage = (currentTime/duration)*100;
    progress.style.width = `${progressPercentage}%`
}
// TODO: 12
const setProgress = (e) =>{
    // getting the width of the progress container
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    // console.log("duration", duration);
    // audio.currentTime = (clickX /600)*duration;
    audio.currentTime = (clickX / width)*duration;

}

const volumeChange = () =>{
    audio.volume = volumeEL.value/100
    volumeLevel.innerText = `${Math.round(volumeEL.value)}%`
}


// eventListners
// TODO: 4

playBtn.addEventListener("click",()=>{
    // first we need to check that song is playing or not
    const isPlaying = musicContainer.classList.contains("play")

    if(isPlaying){
        pauseSong();
    }
    else{
        playSong();
    }
})

// change events
// TODO: 7
prevBtn.addEventListener("click", prevSong)
nextBtn.addEventListener("click", nextSong)

// TODO: 10
audio.addEventListener("timeupdate", updateProgress)  // TODO: new
audio.addEventListener("ended", nextSong)  // TODO: new

progressContainer.addEventListener("click", setProgress)

volumeEL.addEventListener("input", volumeChange)