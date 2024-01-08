let date = new Date();
let currentYear = document.getElementById('currentYear');

currentYear.innerText = date.getFullYear();

// Music Player
let progress = document.getElementById('progressBar');
let iconPlay = document.getElementById('iconPlay');
let song1 = document.getElementById('song1');



function playPause() {
  if (iconPlay.classList.contains('bi-pause-fill')) {
    song1.pause();
    iconPlay.classList.remove('bi-pause-fill');
    iconPlay.classList.add('bi-play-fill');
  } else {
    song1.play();
    iconPlay.classList.add('bi-pause-fill');
    iconPlay.classList.remove('bi-play-fill');
  }
}

function progressOnchange() {
  progress.onchange = function () {
    song1.play();
    song1.currentTime = progress.value;
    iconPlay.classList.add('bi-pause-fill');
    iconPlay.classList.remove('bi-play-fill');
  };
}

if (song1.play()) {
  setInterval(() => {
    progress.value = song1.currentTime;
  }, 500);
}

// end of music player
