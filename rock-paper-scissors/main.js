var content = document.getElementById('content');

var rockPaperScissors = "Replace this with your own abstraction of Rock Paper Scissors"

content.innerHTML = renderGame(rockPaperScissors);

function buttonClicked(event){
    let clickedButton = event.target
    let clickedButtonId = clickedButton.id
    renderUserThrow(clickedButtonId)
    renderComputerThrow()
    hasSomeoneWon()
}

function renderUserThrow(t) {
    if (t === "rock") {
        document.getElementById("userThrow").innerHTML = "ROCK"
    }
    else if (t === "paper") {
        document.getElementById("userThrow").innerHTML = "PAPER"
    }
    else {
        document.getElementById("userThrow").innerHTML = "SCISSORS"
    }
}

function renderComputerThrow() {
    computerThrow = Math.floor(Math.random() * Math.floor(3))
    if (computerThrow === 0) {
        document.getElementById("compThrow").innerHTML = "ROCK"
    }
    else if (computerThrow === 1) {
        document.getElementById("compThrow").innerHTML = "PAPER"
    }
    else {
        document.getElementById("compThrow").innerHTML = "SCISSORS"
    }
}

function hasSomeoneWon() {
    comp = document.getElementById("compThrow").innerHTML
    user = document.getElementById("userThrow").innerHTML
    if (comp === user) {
        document.getElementById("winning").innerHTML = "IT'S A TIE!"
        document.getElementById("winning").style.color = "black"
    }
    else if ((comp === "PAPER" && user === "ROCK") || (comp === "ROCK" && user === "SCISSORS") || (comp === "SCISSORS" && user === "PAPER")) {
        document.getElementById("winning").innerHTML = "COMPUTER WINS!"
        document.getElementById("winning").style.color = "red"
    }
    else {
        document.getElementById("winning").innerHTML = "USER WINS!"
        document.getElementById("winning").style.color = "green"
    }
}

function renderGame(game) {
    // Change this render function to use the "game" parameter

    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>Choose your weapon:</h4>
            <div class="w-50 text-center">
                <button id="rock" class="btn btn-primary" onClick="buttonClicked(event)">Rock</button>
                <button id="paper" class="btn btn-primary" onClick="buttonClicked(event)">Paper</button>
                <button id="scissors" class="btn btn-primary" onClick="buttonClicked(event)">Scissors</button>
            </div>
            <div class="d-flex justify-content-center">
                <div class="m-5">You played: <b id="userThrow">ROCK</b></div>
                <div class="m-5">The computer played: <b id="compThrow">SCISSORS</b></div>
            </div>
            <h1 id="winning" class="text-center">Let's Play Rock-Paper-Scissors!</h1>
        </div>
    `
}