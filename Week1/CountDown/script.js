let timerInterval;
let stopwatchInterval;
let timeRemaining = 0;
let stopwatchTime = 0;

function startTimer() {
    const inputMinutes = parseInt(document.getElementById('timerInput').value);
    timeRemaining = inputMinutes * 60; // Convert minutes to seconds
    clearInterval(timerInterval);
    
    timerInterval = setInterval(() => {
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
        } else {
            timeRemaining--;
            updateTimerDisplay();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    timeRemaining = 0;
    updateTimerDisplay();
    document.getElementById('timerInput').value = '';
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    document.getElementById('timer').textContent = `${minutes}m ${seconds}s`;
}

function startStopwatch() {
    clearInterval(stopwatchInterval);
    
    stopwatchInterval = setInterval(() => {
        stopwatchTime++;
        updateStopwatchDisplay();
    }, 1000);
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
    const minutes = Math.floor(stopwatchTime / 60);
    const seconds = stopwatchTime % 60;
    document.getElementById('stopwatch').textContent = `${minutes}m ${seconds}s`;
}
