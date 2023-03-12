let popup = document.querySelector('.popup');
let closeBtn = document.querySelector('.close');
let secondElem = document.querySelector('.second');
let minuteElem = document.querySelector('.minute');
let hourElem = document.querySelector('.hour');
let ok = document.querySelector('.ok');
let start = document.querySelector('.start');
let stopBtn = document.querySelector('.stop');
let timerElem = document.querySelector('.timer');
//
start.addEventListener('click', function() {
    popup.style.display = 'block';
});
closeBtn.addEventListener('click', function() {
    popup.style.display = 'none';
});
let timerInterval = null;

function setTimer(second, minute, hour) {
    popup.style.display = 'none';
    timerInterval = setInterval(function() {
        second--;
        if (second < 0) {
            second = 59;
            minute--;
        }
        if (minute < 0) {
            minute = 59;
            hour--;
        }
        if (second < 10) {
            second -= "0";
            second = "0" + second;
        }
        if (minute < 10) {
            minute -= "0";
            minute = "0" + minute;
        }
        if (hour < 10) {
            hour -= "0";
            hour = "0" + hour;
        }
        checkTimeOut(hour, minute, second);
    }, 1000);
}
ok.addEventListener('click', function() {
    let second = secondElem.value;
    let minute = minuteElem.value;
    let hour = hourElem.value;
    if (hour == "" || minute == "" || second == "") {
        alert('لطفا با دقت عددد ها را وارد کنید');
    } else if (hour.length > 2 || minute.length > 2 || second.length > 2) {
        alert('تعداد عدد ها نباید بیشتر از دو عدد باشد.');
    } else if (isNaN(hour) || isNaN(minute) || isNaN(second)) {
        alert('لطفا داخل اینپوت ها عدد وارد کنید');
    } else if (hour > 100 || minute > 59 || second > 59) {
        alert('hour > 100  minute > 59   second > 59 بیشتز از این اعداد نباشه.')
    } else {
        setTimer(second, minute, hour);
    }
});

function checkTimeOut(hour, minute, second) {
    if (hour == 00 && minute == 00 && second == 00) {
        console.log('finish');
        clearInterval(timerInterval);
    }
    timerElem.innerHTML = `${hour}:${minute}:${second}`;
}
stopBtn.addEventListener('click', function() {
    clearInterval(timerInterval);
});