// cashing the dom

const musicContainer = document.querySelector(".music-container");
const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const audio = document.querySelector("#audio");
const progressContainer = document.querySelector(".progress-container");
const progress = document.querySelector(".progress");
const title = document.querySelector("#title");
const cover = document.querySelector("#cover");

// song title
const songs = [
  "Castle of glss-Linkin Park",
  "In the end-Linkin Park",
  "NewDivide-Linkin Park",
  "Numb-Linkin Park",
];

// keep track of songs
let songIndex = 1;

const loadSong = (song) =>{
    title.innerText = song;
    audio.src = `../music/${song}.mp3`;
    cover.src = `../images/${song}.jpg`;
}

// initially loads the song
loadSong(songs[songIndex])


const playSong = () =>{
    musicContainer.classList.add("play")
    // changing icon from play to pause
    playBtn.querySelector("i.fa").classList.remove("fa-play")
    playBtn.querySelector("i.fa").classList.add("fa-pause")

    // html audio tag had its own api and methods
    audio.play();
}

const pauseSong = () =>{
    musicContainer.classList.remove("play")
    // changing icon from play to pause
    playBtn.querySelector("i.fa").classList.add("fa-play")
    playBtn.querySelector("i.fa").classList.remove("fa-pause")
    audio.pause();
}

const prevSong = () =>{
    songIndex--
    if(songIndex < 0){
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex])
    playSong()

}

const nextSong = () =>{
    songIndex++
    if(songIndex > songs.length-1){
        songIndex = 0;
    }
    loadSong(songs[songIndex])
    playSong()
}

const updateProgress = (e) =>{
    // e.srcElement.duration
    // e.srcElement.currentTime
    const { duration, currentTime} = e.srcElement;
    const progressPercentage = (currentTime/duration)*100;
    progress.style.width = `${progressPercentage}%`
}

const setProgress = (e) =>{
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    // console.log("duration", duration);
    // audio.currentTime = (clickX /600)*duration;
    audio.currentTime = (clickX / width)*duration;

}


// eventListners

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

prevBtn.addEventListener("click", prevSong)
nextBtn.addEventListener("click", nextSong)

audio.addEventListener("timeupdate", updateProgress)  // TODO: new
audio.addEventListener("ended", nextSong)  // TODO: new

progressContainer.addEventListener("click", setProgress)