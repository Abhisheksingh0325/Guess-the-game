let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')
let prevGuess = []
let numGuess = 2
let playGame = true

if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault()
        const gameGuess = parseInt(userInput.value)
        console.log(gameGuess);
        validateGuess(gameGuess)
    })
}

function validateGuess(params) {
    if (isNaN(params)) {
        alert('Enter a valid number')
    } else if (params < 1) {
        alert('Enter a number more than 1')
    } else if (params > 100) {
        alert('Enter a number less than 100')
    } else {
        prevGuess.push(params)
        if (numGuess === 11) {
            displayGuess(params)
            displayMessage(`Game over, random num was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(params)
            checkGuess(params)
        }
    }
}

function checkGuess(params2){
    if (params2 === randomNumber ) {
        displayMessage('You gussed Right');
        endGame()
    } else if ( params2 < randomNumber) {
        displayMessage('Number is too low');

    }else if ( params2 > randomNumber) {
        displayMessage('Number is too high');

    }
    } 

function displayMessage(param3){
   lowOrHi.innerHTML = `<h2>${param3}</h2>`
}

function displayGuess (param4){
   userInput.value = ''
   guessSlot.innerHTML += `${param4}, `
   numGuess++;
   remaining.innerHTML = `${ 12 - numGuess} `
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute(`disabled`, '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame" >Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame()
    
}

function newGame() {
   const newGameBtn = document.querySelector('#newGame');
   newGameBtn.addEventListener('click', function(){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${ 11 - numGuess} `
    userInput.removeAttribute(`disabled`)
    startOver.removeChild(p)
    playGame = true

   })
}

