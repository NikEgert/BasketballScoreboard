let countHome = 0
let countGuest = 0
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let resetScore = document.getElementById("reset-el")

function onePointHome() {
    countHome += 1
    homeScore.textContent = countHome
}

function twoPointHome() {
    countHome += 2
    homeScore.textContent = countHome
}

function threePointHome() {
    countHome += 3
    homeScore.textContent = countHome
}

function onePointGuest() {
    countGuest += 1
    guestScore.textContent = countGuest
}

function twoPointGuest() {
    countGuest += 2
    guestScore.textContent = countGuest
}

function threePointGuest() {
    countGuest += 3
    guestScore.textContent = countGuest
}

function resetScoreboard() {
    countHome = 0
    countGuest = 0
    homeScore.textContent = countHome
    guestScore.textContent = countGuest
}
