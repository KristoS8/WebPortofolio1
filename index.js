let date = new Date();
let currentYear = document.getElementById('currentYear');

currentYear.innerText = date.getFullYear();

// Music Player
let progress = document.getElementById('progressBar');
let iconPlay = document.getElementById('iconPlay');
let song1 = document.getElementById('song1');
let songCurrentTime = document.getElementById('current-time');
let musicDuration = document.getElementById('song-duration');

let updateTimer;
updateTimer = setInterval(setUpdate, 1000);
song1.pause();

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
  let progressAudio = song1.duration * (progress.value / 100);
  song1.currentTime = progressAudio;
}

function setUpdate() {
  let progressPosition = 0;
  if (!isNaN(song1.duration)) {
    progressPosition = song1.currentTime * (100 / song1.duration);
    progress.value = progressPosition;

    let currentMinutes = Math.floor(song1.currentTime / 60);
    let currentSeconds = Math.floor(song1.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(song1.duration / 60);
    let durationSeconds = Math.floor(song1.duration - durationMinutes * 60);

    if (currentSeconds < 10) {
      currentSeconds = '0' + currentSeconds;
    }
    if (durationSeconds < 10) {
      durationSeconds = '0' + durationSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = '0' + currentMinutes;
    }
    if (durationMinutes < 10) {
      durationMinutes = '0' + durationMinutes;
    }

    songCurrentTime.textContent = currentMinutes + ':' + currentSeconds;
    musicDuration.textContent = durationMinutes + ':' + durationSeconds;
  }
}
// end of music player
