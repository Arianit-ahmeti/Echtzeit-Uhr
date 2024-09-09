// Digitale Uhr
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Aktualisiere die Uhr jede Sekunde
setInterval(updateClock, 1000);
updateClock()// Aufruf, um die Uhr sofort zu starten

// Globale Variablen
let stopwatchInterval;
let stopwatchTime = 0;
function updateStopwatch() {
    const hours = String(Math.floor(stopwatchTime / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((stopwatchTime % 3600) / 60)).padStart(2, '0');
    const seconds = String(stopwatchTime % 60).padStart(2, '0');
    document.getElementById('stopwatch').textContent = `${hours}:${minutes}:${seconds}`;
}

document.getElementById('startStopwatch').addEventListener('click', function() {

    clearInterval(stopwatchInterval); // Stoppt den Timer, falls er bereits läuft, um Doppelstarts zu verhindern.
    stopwatchInterval = setInterval(function() {
        stopwatchTime++; // Erhöht die Zeit in Sekunden.
        updateStopwatch(); // Aktualisiert die Anzeige der Stoppuhr.
    }, 1000); // 1000 Millisekunden = 1 Sekunde.
});
document.getElementById('startStopwatch').addEventListener('click', function() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = setInterval(function() {
        stopwatchTime++;
        updateStopwatch();
    }, 1000);
});

document.getElementById('stopStopwatch').addEventListener('click', function() {
    clearInterval(stopwatchInterval);
});

document.getElementById('resetStopwatch').addEventListener('click', function() {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    updateStopwatch();
});
// Countdown-Timer
let countdownInterval;

function startCountdown() {
    let countdownMinutes = parseInt(document.getElementById('countdownMinutes').value);
    let countdownTime = countdownMinutes * 60;

    countdownInterval = setInterval(function() {
        if (countdownTime <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').textContent = "00:00:00";
            alert("Zeit abgelaufen!");
        } else {
            const hours = String(Math.floor(countdownTime / 3600)).padStart(2, '0');
            const minutes = String(Math.floor((countdownTime % 3600) / 60)).padStart(2, '0');
            const seconds = String(countdownTime % 60).padStart(2, '0');
            document.getElementById('countdown').textContent = `${hours}:${minutes}:${seconds}`;
            countdownTime--;
        }
    }, 1000);
}

document.getElementById('startCountdown').addEventListener('click', function() {
    clearInterval(countdownInterval);
    startCountdown();
});
