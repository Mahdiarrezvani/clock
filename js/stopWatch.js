let timerElem = document.querySelector('.timer');
let hours = 0;
let minute = 0;
let second = 0;
let resetBtn = document.querySelector('.reset');
let startBtn = document.querySelector('.start');
let recordBtn = document.querySelector('.record');
let recordsContainer = document.querySelector('.records-container');

function timerFun() {
    second++;
    if (second < 10) {
        second = '0' + second;
    }
    if (second > 59) {
        second = '0';
        minute++;
    }
    if (minute > 59) {
        minute = '0';
        hours++;
    }
    if (minute < 10) {
        minute -= 0;
        minute = '0' + minute;
    }
    if (hours < 10) {
        hours -= 0;
        hours = '0' + hours;
    }
    timerElem.innerHTML = `${hours}:${minute}:${second}`;
}
let isStart = false;
let timerInterval = null;
startBtn.addEventListener('click', function() {
    if (isStart) {
        isStart = false;
        clearInterval(timerInterval);
        startBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    } else {
        startBtn.innerHTML = '<i class="fa-solid fa-stop"></i>';
        timerInterval = setInterval(timerFun, 1000);
        isStart = true;
    }
});
resetBtn.addEventListener('click', function() {
    timerElem.innerHTML = '00:00:00';
    isStart = false;
    recordsContainer.innerHTML = '';
    startBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    clearInterval(timerInterval);
});
recordBtn.addEventListener('click', function() {
    recordsContainer.insertAdjacentHTML('beforeend', `
    <p>${timerElem.innerHTML}</p>
    `);
});