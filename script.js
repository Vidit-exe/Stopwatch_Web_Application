let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".timer-display");
let int = null;

document.getElementById("start-timer").addEventListener("click", () => {
    if(int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById("pause-timer").addEventListener("click", () => {
    clearInterval(int);
});

let laps = document.getElementById("lap-timer").addEventListener("click", () => {
    stop()
    let lapCount = document.getElementById("lapCount")
    let li = document.createElement("li")
    li.textContent = timeRef.innerHTML
    lapCount.appendChild(li)
    li.style.listStyleType = 'none'
})

let resetLap = document.getElementById("reset-laps")
resetLap.addEventListener("click", () => {
    lapCount.innerHTML = ""
})

let reset = document.getElementById("reset-timer").addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 : 000 ";
});

function displayTimer() {
    milliseconds += 10;
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
    let ms = 
        milliseconds < 10
        ? "00" + milliseconds
        : milliseconds < 100
        ? "0" + milliseconds
        : milliseconds;

    let currentTime = timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
    // for (let i = 0; i < 10; i++) {
        // document.getElementById("lap-timer").addEventListener("click", () => {
        //     stop()
        //     let li = document.createElement("li")
        //     li.innerHTML = currentTime
        //     laps.appendChild(li)
        // })
    // }
}

// document.getElementById("lap-timer").addEventListener("click", () => {
//     stop()
//     let lapCount = document.getElementById("lapCount")
//     let li = document.createElement("li")
//     li.textContent = timeRef.innerHTML
//     lapCount.appendChild(li)
//     li.style.listStyleType = 'none'
// })