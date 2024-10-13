const body = document.querySelector("body");
const nav = document.querySelector(".nav");
const burger = document.querySelector("nav button");

function toggleNav() {
  nav.classList.toggle("active");
  body.classList.toggle("lock");
}

burger.addEventListener("click", toggleNav);
nav.addEventListener("click", toggleNav);

const audioPlayer = document.querySelector(".jsAudioPlayer");
const buttonLanding = document.querySelector(".jsButtonLanding");
const playButtons = document.querySelectorAll(".jsPlayButton");
const pauseButton = document.querySelector(".jsPauseButton");

let isPlaying = false;

function toggleAudio() {
  if (isPlaying) {
    pauseAudio();
  } else {
    playAudio();
  }
  isPlaying = !isPlaying;
}

function playAudio() {
  buttonLanding.textContent = "pause";
  audioPlayer.play();
}

function pauseAudio() {
  buttonLanding.textContent = "play";
  audioPlayer.pause();
}

playButtons.forEach((playButton) => {
  playButton.addEventListener("click", toggleAudio);
});

pauseButton.addEventListener("click", toggleAudio);
