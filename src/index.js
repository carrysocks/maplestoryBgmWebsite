const musicArray = {
  ClockTowerofNightmare: 104,
  SoupOfLife: 111,
  "Flower and Wind": 159,
  "Hot Desert": 130,
  "When The Morning Comes": 150,
  "2010 Winter": 163
};
const player__music = document.querySelector("#bgm__player");
const player__image = document.querySelector(".container");
const maintext = document.querySelector(".main__text");
const start = document.querySelector("#start__button");
const ImageNum = 5;
let randomMusicIndex = 0;
let randomImageIndex = 0;
let selectedMusic;
let musicTime = 0;
let visited = [];

function randomMusic() {
  randomMusicIndex = Math.floor(Math.random() * Object.keys(musicArray).length);
  selectedMusic = Object.keys(musicArray)[randomMusicIndex];

  return selectedMusic;
}

function randomImage() {
  let index = Math.floor(Math.random() * ImageNum);

  return index;
}

function playImage() {
  randomImageIndex = randomImage();
  player__image.style.backgroundImage = "url('image1.jpeg')";
  setTimeout(() => {
    playImage();
  }, 10000);
}

function playMusic() {
  selectedMusic = randomMusic();

  if (visited.length === Object.keys(musicArray).length) {
    while (visited.length > 0) {
      visited.pop();
    }
  }

  if (!visited.includes(selectedMusic)) {
    musicTime = musicArray[selectedMusic];
    console.log(selectedMusic, musicTime);
    player__music.innerHTML = `
    <audio src="bgm/${selectedMusic}.mp3" autoplay>
    `;
    maintext.innerHTML = selectedMusic;
    visited.push(selectedMusic);

    setTimeout(() => {
      playMusic();
    }, 1000 * musicTime);
  } else {
    playMusic();
  }
}

function init() {
  playMusic();
  playImage();
}

start.addEventListener("click", init);
