"use strict";
const playerDivEl = document.querySelector('.player');
const  videoPlayerEl = document.createElement('video');
videoPlayerEl.src = 'assets/file_example_MP4_640_3MG.mp4';
videoPlayerEl.classList.add('videoBox');
const btnPanel = document.createElement('div');
btnPanel.classList.add('btnPan');
const btnPlayEl = document.createElement('div');
btnPlayEl.classList.add('btnPlay');
const btnPauseEl = document.createElement('div');
btnPauseEl.classList.add('btnPause');

btnPlayEl.onclick = () => {
    videoPlayerEl.play();
}

btnPauseEl.onclick = () => {
    videoPlayerEl.pause();
}

const volumeEl = document.createElement('input');
volumeEl.type = 'range';
volumeEl.min = 0;
volumeEl.max = 10;
volumeEl.value = 5;

videoPlayerEl.volume = 0.5;
volumeEl.addEventListener('change', (e) => {
   videoPlayerEl.volume = e.target.value/10;
});

btnPanel.appendChild(btnPlayEl);
btnPanel.appendChild(btnPauseEl);
playerDivEl.appendChild(videoPlayerEl);
playerDivEl.appendChild(btnPanel);
playerDivEl.appendChild(volumeEl);
