let countHome = 0;
let countGuest = 0;
let countFoulHome = 0;
let countFoulGuest = 0;
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homeFoulCount = document.getElementById("home-foul-count");
let guestFoulCount = document.getElementById("guest-foul-count");
let homeTeamName = document.getElementById("home-team-name");
let guestTeamName = document.getElementById("guest-team-name");
let timerElement = document.getElementById("timer");
let timerInterval;

function onePointHome() {
    countHome += 1;
    homeScore.textContent = countHome;
}

function twoPointHome() {
    countHome += 2;
    homeScore.textContent = countHome;
}

function threePointHome() {
    countHome += 3;
    homeScore.textContent = countHome;
}

function onePointGuest() {
    countGuest += 1;
    guestScore.textContent = countGuest;
}

function twoPointGuest() {
    countGuest += 2;
    guestScore.textContent = countGuest;
}

function threePointGuest() {
    countGuest += 3;
    guestScore.textContent = countGuest;
}

function resetScoreboard() {
    countHome = 0;
    countGuest = 0;
    countFoulHome = 0;
    countFoulGuest = 0;
    homeScore.textContent = countHome;
    guestScore.textContent = countGuest;
    homeFoulCount.textContent = countFoulHome;
    guestFoulCount.textContent = countFoulGuest;
}

function incrementFoul(team) {
    if (team === 'home') {
        countFoulHome += 1;
        homeFoulCount.textContent = countFoulHome;
    } else if (team === 'guest') {
        countFoulGuest += 1;
        guestFoulCount.textContent = countFoulGuest;
    }
}

function decrementFoul(team) {
    if (team === 'home' && countFoulHome > 0) {
        countFoulHome -= 1;
        homeFoulCount.textContent = countFoulHome;
    } else if (team === 'guest' && countFoulGuest > 0) {
        countFoulGuest -= 1;
        guestFoulCount.textContent = countFoulGuest;
    }
}

function startTimer() {
    clearInterval(timerInterval);
    let timeInSeconds = 0;
    timerInterval = setInterval(() => {
        timeInSeconds += 1;
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        timerElement.textContent = `${padTime(minutes)}:${padTime(seconds)}`;
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    timerElement.textContent = '00:00';
}

function padTime(time) {
    return time.toString().padStart(2, '0');
}

// Optional: Set initial team names
homeTeamName.value = "HOME";
guestTeamName.value = "GUEST";
