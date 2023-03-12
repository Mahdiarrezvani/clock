let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let timer = document.querySelector('.timer');
let addAlarm = document.querySelector('.add-alarm');
let alarms = document.querySelector('.alarms');
// popup
let popup = document.querySelector('.popup');
let closeBtn = document.querySelector('.close');
let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
// let amPm = document.querySelector('.am-pm');
let ok = document.querySelector('.ok');

function timerFun() {
    // باگ در ثانیه 0 نمیشه 00
    seconds++;
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    if (seconds > 59) {
        seconds = '0';
        minutes++;
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
addAlarm.addEventListener('click', function() {
    popup.style.display = 'block';
});
closeBtn.addEventListener('click', function() {
    popup.style.display = 'none';
});
// Add Alarm
let timeAlarms = null;
ok.addEventListener('click', function() {
    let alarmsArray = JSON.parse(localStorage.getItem("alarms"));
    alarmsArray ? timeAlarms = alarmsArray : timeAlarms = [];
    if (hour.value == "" || minute.value == "") {
        alert('لطفا با دقت عددد ها را وارد کنید');
    } else if (hour.value.length > 2 || minute.value.length > 2) {
        alert('تعداد عدد ها نباید بیشتر از دو عدد باشد.');
    } else if (isNaN(hour.value) || isNaN(minute.value)) {
        alert('لطفا داخل اینپوت ها عدد وارد کنید');
    } else if (hour.value > 100 || minute.value > 59) {
        alert('hour > 100  minute > 59   second > 59 بیشتز از این اعداد نباشه.')
    } else {
        timeAlarms.push({ time: `${hour.value}:${minute.value}`, status: true });
        localStorage.setItem('alarms', JSON.stringify(timeAlarms));
        // 
        popup.style.display = 'none';
        // 
        addAlarms();
    }
});

function addAlarms() {
    alarms.innerHTML = '';
    let getAlarms = JSON.parse(localStorage.getItem("alarms"));
    let statusAlarm = null;
    let number = 0;
    getAlarms.forEach(function(info) {
        // 
        info.status ? statusAlarm = 'checked' : statusAlarm = '';
        alarms.insertAdjacentHTML('beforeend', `
        <div class="alarm">
        <p class="time">${info.time} <span class="">am</span></p>
        <div class="form-check form-switch">
        <input type="checkbox" class="form-check-input" value="${number}" ${statusAlarm} />
        </div>
        </div>`);
        number++;
    });
}
// Status Change
addAlarms();
let alarmElem = document.querySelectorAll('.form-check-input');
alarmElem.forEach(function(e) {
    let alarmsArray = JSON.parse(localStorage.getItem("alarms"));
    let newArray = [...alarmsArray];
    e.addEventListener('click', function(event) {
        let alarmValue = event.target.value;
        let alarm = newArray[alarmValue];
        console.log(alarm.status);
        alarm.status ? alarm.status = false : alarm.status = true;
        localStorage.setItem('alarms', JSON.stringify(newArray));
    });
});
// حذف الارم رو هم باید درست کرد.