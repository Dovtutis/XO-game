
const element1 = document.getElementById('1')
const element2 = document.getElementById('2')
const element3 = document.getElementById('3')
const element4 = document.getElementById('4')
const element5 = document.getElementById('5')
const element6 = document.getElementById('6')
const element7 = document.getElementById('7')
const element8 = document.getElementById('8')
const element9 = document.getElementById('9')

let symbolTrigger = true
let elementArray = []
elementArray = [element1, element2, element3, element4, element5, element6, element7, element8, element9]

elementArray.map(x => {
    x.addEventListener("click", addSymbol)
})

function startNewGame(){
    for (let i = 0; i < elementArray.length; i++) {
        elementArray[i].innerHTML = ""
    }
}

function addSymbol(event){

    if (symbolTrigger === true) {
        event.path[0].innerHTML = `<i class="fas fa-times bigSymbol"></i>`
        symbolTrigger = false
        event.target.classList.add("x")
        checkStatus("x")

    } else {
        event.path[0].innerHTML = `<i class="far fa-circle bigSymbol"></i>`
        symbolTrigger = true
        event.target.classList.add("o")
        checkStatus("o")
    }
}

function checkStatus (arg) {
    if (element1.classList.contains(arg) && element2.classList.contains(arg) && element3.classList.contains(arg)){
        alert(`Player ${arg} won`)
        startNewGame()
    }
    if (element4.classList.contains(arg) && element5.classList.contains(arg) && element6.classList.contains(arg)){
        alert(`Player ${arg} won`)
        startNewGame()
    }
    if (element7.classList.contains(arg) && element8.classList.contains(arg) && element9.classList.contains(arg)){
        alert(`Player ${arg} won`)
        startNewGame()
    }

    if (element4.classList.contains(arg) && element5.classList.contains(arg) && element6.classList.contains(arg)){
        alert(`Player ${arg} won`)
        startNewGame()
    }
    if (element2.classList.contains(arg) && element6.classList.contains(arg) && element8.classList.contains(arg)){
        alert(`Player ${arg} won`)
        startNewGame()
    }
    if (element3.classList.contains(arg) && element6.classList.contains(arg) && element9.classList.contains(arg)){
        alert(`Player ${arg} won`)
        startNewGame()
    }

    if (element1.classList.contains(arg) && element5.classList.contains(arg) && element9.classList.contains(arg)){
        alert(`Player ${arg} won`)
        startNewGame()
    }
    if (element3.classList.contains(arg) && element5.classList.contains(arg) && element7.classList.contains(arg)){
        alert(`Player ${arg} won`)
        startNewGame()
    }
}























