const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

const chineseDays = document.getElementById('c-days');
const chineseHours = document.getElementById('c-hours');
const chineseMinutes = document.getElementById('c-minutes');
const chineseSeconds = document.getElementById('c-seconds');
const chineseCountDown = document.getElementById('c-countdown');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);
const chineseNewYearTime = new Date(`February 12 ${currentYear + 1} 00:00:00`);

// Set background year
year.innerText = currentYear + 1;

// Update countdown time
function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // Add values to DOM
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
}



function updateChineseCountdown() {
  const currentTime = new Date();
  const diff = chineseNewYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // Add values to DOM
  chineseDays.innerHTML = d;
  chineseHours.innerHTML = h < 10 ? '0' + h : h;
  chineseMinutes.innerHTML = m < 10 ? '0' + m : m;
  chineseSeconds.innerHTML = s < 10 ? '0' + s : s;
}

// Show spinner before countdown
setTimeout(() => {
  loading.remove();
  countdown.style.display = 'flex';
  chineseCountDown.style.display = 'flex';
}, 1000);

// Run every second
setInterval(updateCountdown, 1000);
setInterval(updateChineseCountdown, 1000);