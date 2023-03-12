// console.log(date.getMilliseconds());
// World Clock
let timer = document.querySelector('.timer');
let dateElem = document.querySelector('.date');
// 
let daysOfWeek = ['saturday', 'sunday', 'monday', 'tuesday', 'wendesday', 'thursday', 'friday'];
let monthsOfYear = ['januray', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
// 
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let today = date.getDay();
let month = date.getMonth();
let dateToday = date.getDate();
dateElem.innerHTML = `${daysOfWeek[today]}, ${monthsOfYear[month]} ${dateToday}`;

function timerFun() {
    seconds++;
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    if (seconds > 59) {
        seconds = '0';
        minutes++;
    }
    if (minutes > 59) {
        minutes = '0';
        hours++;
    }
    if (minutes < 10) {
        minutes -= "0";
        minutes = '0' + minutes;
    }
    if (hours < 10) {
        hours -= "0";
        hours = '0' + hours;
    }
    timer.innerHTML = `${hours}:${minutes}:${seconds} <span>am</span>`;
}
timerFun();
setInterval(timerFun, 1000);
// console.log(date.getTimezoneOffset());
// console.log(date.getUTCDate());
// console.log(date.getUTCDay());
// console.log(date.getUTCFullYear());
// console.log(date.getUTCHours());
// console.log(date.getUTCMilliseconds());
// console.log(date.getUTCMinutes());
// console.log(date.getUTCMonth());
// console.log(date.getUTCSeconds());