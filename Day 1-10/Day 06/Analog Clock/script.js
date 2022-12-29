//Get all the elements that actions will be added to
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let seconds = document.querySelector(".seconds");

//A function
let setClock = setInterval(() => {
    let dateNow = new Date();

    let hr = dateNow.getHours();
    let min = dateNow.getMinutes();
    let sec = dateNow.getSeconds();

    let calcHr = (hr * 30) + (min / 2);
    let calcMin = (min * 6) + (sec / 10);
    let calcSec = sec * 6;


    hour.style.transform = `rotate(${calcHr}deg)`;
    minute.style.transform = `rotate(${calcMin}deg)`;
    seconds.style.transform = `rotate(${calcSec}deg)`;
}, 1000);