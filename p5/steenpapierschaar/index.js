let elementTimer = document.getElementById("timer")
let elementResult = document.getElementById("result")
let elementPlayer1Choice = document.getElementById("Speler1keuze")
let elementPlayer2Choice = document.getElementById("Speler2keuze")

const ROCK = "1"
const PAPER = "2"
const SCISSORS = "3"

elementTimer.innerHTML = 0
elementResult.innerHTML = "Klik op spatie om te beginnen"
let player1 = ""
let player2 = ""
let timer = 5
let readyToChoose = false;

function Result() {
    // 1/8 ROCK 2/9 PAPER 3/0 SCISSORS
    if ((player1 == "") && (player2 == "")) {
        return "gelijkspel"
    }
    if (player1 == "") {
        return "speler 2 heeft gewoonnen"
    }
    if (player2 == "") {
        return "speler 1 heeft gewonnen"
    }
    if ((player1 == ROCK) && (player2 == ROCK)) {
        return "gelijkspel"
    }
    if ((player1 == SCISSORS) && (player2 == SCISSORS)) {
        return "gelijkspel"
    }
    if ((player1 == PAPER) && (player2 == PAPER)) {
        return "gelijkspel"
    }

    if ((player1 == PAPER) && (player2 == SCISSORS)) {
        return "speler 2 heeft gewoonnen"
    }
    if ((player1 == PAPER) && (player2 == ROCK)) {
        return "speler 1 heeft gewonnen"
    }

    if ((player1 == SCISSORS) && (player2 == ROCK)) {
        return "speler 2 heeft gewoonnen"
    }
    if ((player1 == SCISSORS) && (player2 == PAPER)) {
        return "speler 1 heeft gewonnen"
    }

    if ((player1 == ROCK) && (player2 == PAPER)) {
        return "speler 2 heeft gewoonnen"
    }
    if ((player1 == ROCK) && (player2 == SCISSORS)) {
        return "speler 1 heeft gewonnen"
    }

    return "unknown state"
}

function countDown() {
    readyToChoose = false
    if (timer == 0) {
        gameStart()
    } else {
        timer = timer - 1
        elementTimer.innerHTML = timer
        setTimeout(countDown, 500)
    }
}

function gameStart() {
    readyToChoose = true
    timer = 10
    elementResult.innerHTML = "Spel is begonnen"
    gameCountDown()
}

function getChoice(choice) {
    switch (choice) {
        case ROCK:
            return "Steen";
        case PAPER:
            return "Papier";
        case SCISSORS:
            return "Schaar";

        default:
            break;
    }
}

function gameCountDown() {
    if (timer == 0) {
        readyToChoose = false
        elementResult.innerHTML = Result()
        elementPlayer1Choice.innerHTML = getChoice(player1)
        elementPlayer2Choice.innerHTML = getChoice(player2)
    } else {
        timer = timer - 1
        elementTimer.innerHTML = timer
        setTimeout(gameCountDown, 500)

    }
}

document.addEventListener('keydown', (event) => {
    console.log(event.key);
    switch (event.key) {
        case ' ':
            countDown()
            break;
        case '1':
            player1 = ROCK
            break;
        case '2':
            player1 = PAPER
            break;
        case '3':
            player1 = SCISSORS
            break;
        case '8':
            player2 = ROCK
            break;
        case '9':
            player2 = PAPER
            break;
        case '0':
            player2 = SCISSORS
            break;
        default:
            console.log(`key: ${event.key} was not found`)
            break;
    }
})

console.log("test");