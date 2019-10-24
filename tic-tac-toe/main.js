let content = document.getElementById('content');

// STATE
let ticTacToe = [
    ["-","-","-"],
    ["-","-","-"],
    ["-","-","-"]
    ]

let isXTurn = true

content.innerHTML = renderGame(ticTacToe);

function buttonClicked(event) {
    let clickedButton = event.target
    let clickedButtonID = clickedButton.id
    let rowIdx = clickedButtonID[0]
    let colIdx = clickedButtonID[1]
    renderSquare(rowIdx, colIdx)
}

function renderSquare(row, col) {
    let squareID = row + col
    console.log(squareID)
    console.log(document.getElementById(squareID).innerHTML)
    if (document.getElementById(squareID).innerHTML === "-") {
        isXTurn === true ? character = "X" : character = "O"
        document.getElementById(squareID).innerHTML = character
        isXTurn === false ? isXTurn = true : isXTurn = false
        isXTurn === true ? character = "X" : character = "O"
        document.getElementById("titleCard").innerHTML =  `${character}'s Turn!`
    }
}

function renderGame(game) {
    // Change this render function to use the "game" parameter

    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4 id="titleCard">X's Turn!</h4>
            <div class="w-50 text-center">
                <button id="00" onClick = "buttonClicked(event)">${game[0][0]} </button>
                <button id="01" onClick = "buttonClicked(event)">${game[0][1]} </button>
                <button id="02" onClick = "buttonClicked(event)">${game[0][2]} </button>
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