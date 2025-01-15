const hoursElem = document.querySelector(".hours")
const minutesElem = document.querySelector(".minutes")
const secondsElem = document.querySelector(".seconds")

function getTime() {
    const date = new Date();

    let hours = date.getHours();
    let minutes = date.getminutes();
    let seconds = date.getseconds();

    if (hours < 10) hours = '0${hours}';
    if (minutes < 10) minutes = '0${minutes}';
    if (seconds < 10) seconds = '0${seconds}';

return[hours, minutes, seconds];
}

function app(){
    setInterval(() =>{
     const [h ,m, s] = getTime();

     hoursElem.textContent = h;
     minutesElem.textContent = m;
     secondsElem.textContent = s;
    }, 500)
}

app();
