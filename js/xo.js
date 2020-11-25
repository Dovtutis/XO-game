
const element1 = document.getElementById('1')
const element2 = document.getElementById('2')
const element3 = document.getElementById('3')
const element4 = document.getElementById('4')
const element5 = document.getElementById('5')
const element6 = document.getElementById('6')
const element7 = document.getElementById('7')
const element8 = document.getElementById('8')
const element9 = document.getElementById('9')
const player1pointsBox = document.getElementById('player1Points')
const player2pointsBox = document.getElementById('player2Points')
const playerTurn = document.getElementById('playerTurn')
const startNewGameButton = document.getElementById('startNewGameButton').onclick = startNewGame

let symbolTrigger = true
let winingConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let elementArray = []
let player1points = 0
let player2points = 0
let drawCounter = 0

elementArray = [element1, element2, element3, element4, element5, element6, element7, element8, element9]
elementArray.map(x => {
    x.addEventListener("click", addSymbol)
})

function startNewGame(){
    drawCounter = 0
    symbolTrigger = true

    for (let i = 0; i < elementArray.length; i++) {
        elementArray[i].innerHTML = ""
    }
    playerTurn.innerText = "Now is CROSS player turn"
}

function addSymbol(event){

    if (event.path[0].innerHTML === "") {
        if (symbolTrigger === true) {
            event.path[0].innerHTML = `<i class="fas fa-times bigSymbol pointerNon"></i>`
            playerTurn.innerText = "Now is CIRCLE player turn"
            symbolTrigger = false
            event.target.classList.add("x")
            drawCounter++
            checkStatus("x")
            console.log(event)
        } else {
            event.path[0].innerHTML = `<i class="far fa-circle bigSymbol pointerNon"></i>`
            symbolTrigger = true
            playerTurn.innerText = "Now is CROSS player turn"
            event.target.classList.add("o")
            drawCounter++
            checkStatus("o")
        }
    } else {
        console.log("pilnas")
    }
}

function checkStatus (arg) {
    winingConditions.map(x => {

        if (elementArray[x[0]].classList.contains(arg) && elementArray[x[1]].classList.contains(arg) && elementArray[x[2]].classList.contains(arg)){
            alert(`Player ${arg} won`)
            if (arg === "x") {
                player1points++
                player1pointsBox.innerText = `Player 1 points: ${player1points}`
                startNewGame()
                return
            } else {
                player2points++
                player2pointsBox.innerText = `Player 2 points: ${player2points}`
                startNewGame()
                return
            }
        }
        if (drawCounter === 9){
            alert("DRAW!")
            startNewGame()
        }
    })
}

// function checkStatus (arg) {
//     if (element1.classList.contains(arg) && element2.classList.contains(arg) && element3.classList.contains(arg)){
//         alert(`Player ${arg} won`)
//         startNewGame()
//     }
//     if (element4.classList.contains(arg) && element5.classList.contains(arg) && element6.classList.contains(arg)){
//         alert(`Player ${arg} won`)
//         startNewGame()
//     }
//     if (element7.classList.contains(arg) && element8.classList.contains(arg) && element9.classList.contains(arg)){
//         alert(`Player ${arg} won`)
//         startNewGame()
//     }
//
//     if (element4.classList.contains(arg) && element5.classList.contains(arg) && element6.classList.contains(arg)){
//         alert(`Player ${arg} won`)
//         startNewGame()
//     }
//     if (element2.classList.contains(arg) && element6.classList.contains(arg) && element8.classList.contains(arg)){
//         alert(`Player ${arg} won`)
//         startNewGame()
//     }
//     if (element3.classList.contains(arg) && element6.classList.contains(arg) && element9.classList.contains(arg)){
//         alert(`Player ${arg} won`)
//         startNewGame()
//     }
//
//     if (element1.classList.contains(arg) && element5.classList.contains(arg) && element9.classList.contains(arg)){
//         alert(`Player ${arg} won`)
//         startNewGame()
//     }
//     if (element3.classList.contains(arg) && element5.classList.contains(arg) && element7.classList.contains(arg)){
//         alert(`Player ${arg} won`)
//         startNewGame()
//     }
// }
//














