let content = document.getElementById('content');

// STATE
let ticTacToe = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
]

let isXTurn = true
let moves = 0
let over = false

content.innerHTML = renderGame(ticTacToe);

function buttonClicked(event) {
    let clickedButton = event.target
    let clickedButtonID = clickedButton.id
    let rowIdx = clickedButtonID[0]
    let colIdx = clickedButtonID[1]
    renderSquare(rowIdx, colIdx)
}

function hasSomeoneWon() {
    let conditions = [
        document.getElementById("00").innerHTML + document.getElementById("01").innerHTML + document.getElementById("02").innerHTML,
        document.getElementById("10").innerHTML + document.getElementById("11").innerHTML + document.getElementById("12").innerHTML,
        document.getElementById("20").innerHTML + document.getElementById("21").innerHTML + document.getElementById("22").innerHTML,
        document.getElementById("01").innerHTML + document.getElementById("11").innerHTML + document.getElementById("21").innerHTML,
        document.getElementById("02").innerHTML + document.getElementById("12").innerHTML + document.getElementById("22").innerHTML,
        document.getElementById("00").innerHTML + document.getElementById("11").innerHTML + document.getElementById("22").innerHTML,
        document.getElementById("02").innerHTML + document.getElementById("11").innerHTML + document.getElementById("20").innerHTML,
    ]

    if (moves < 9 && over === false) {
        for (let i = 0; i < conditions.length; i++) {
            if (conditions[i] === "XXX") {
                document.getElementById("titleCard").innerHTML = "X WON!"
                over = true
            }
            else if (conditions[i] === "OOO") {
                document.getElementById("titleCard").innerHTML = "O WON!"
                over = true
            }
        }
    }
    else {
        document.getElementById("titleCard").innerHTML = "NOONE WON!"
        over = true
    }
}

function renderSquare(row, col) {
    if (over === false) {
        let squareID = row + col
        if (document.getElementById(squareID).innerHTML === "-") {
            isXTurn === true ? character = "X" : character = "O"
            document.getElementById(squareID).innerHTML = character
            isXTurn === false ? isXTurn = true : isXTurn = false
            isXTurn === true ? character = "X" : character = "O"
            document.getElementById("titleCard").innerHTML = `${character}'s Turn!`
            moves += 1
            
        }
        hasSomeoneWon()
    }
}

function renderGame(game) {
    // Change this render function to use the "game" parameter

    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4 id="titleCard">X's Turn!</h4>
            <div class="w-50 text-center">
                <button id="00" onClick = "buttonClicked(event)">${game[0][0]}</button>
                <button id="01" onClick = "buttonClicked(event)">${game[0][1]}</button>
                <button id="02" onClick = "buttonClicked(event)">${game[0][2]}</button>
            </div>
            <div class="w-50 text-center">
                <button id="10" onClick = "buttonClicked(event)">${game[1][0]}</button>
                <button id="11" onClick = "buttonClicked(event)">${game[1][1]}</button>
                <button id="12" onClick = "buttonClicked(event)">${game[1][2]}</button>
            </div>
            <div class="w-50 text-center">
                <button id="20" onClick = "buttonClicked(event)">${game[2][0]}</button>
                <button id="21" onClick = "buttonClicked(event)">${game[2][1]}</button>
                <button id="22" onClick = "buttonClicked(event)">${game[2][2]}</button>
            </div>
        </div>
    `
}