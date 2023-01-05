let [milliseconds, seconds, minutes, hours] = [0,0,0,0] 
let timerRef = document.querySelector('.timerDisplay');
//Adding eventListener to the start button
let int;
document.getElementById('startTimer').addEventListener('click', () => {
    int = setInterval(displayTimer, 10);
});

//Implementing the Pause Button
document.getElementById('pauseTimer').addEventListener('click', () => {
    clearInterval(int);
});

//Implementing the Reset Button
document.getElementById('resetTimer').addEventListener('click', () => {
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 : 000 ';
})
//Implementing the start function
function displayTimer() {
    milliseconds+=10;
    if(milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if(seconds == 60) {
            seconds = 0;
            minutes++;
            if(minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds;
    milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}