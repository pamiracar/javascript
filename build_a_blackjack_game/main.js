
let firstCard = 0;
let secondCard = 0;
let isBlackjack = false
let isAlive = true
let sum = 0
let message = ""
let newCard = 0

let messageEl = document.getElementById("message-el")
console.log(messageEl)

let sumEl = document.querySelector("#sum-el")
console.log(sumEl)

let cardsEl = document.getElementById("cards-el")
let gameStarted = false



function startGame() {
    gameStarted = true
    firstCard = Math.floor(Math.random() * 9) + 2
    secondCard = Math.floor(Math.random() * 9) + 2
    sum = firstCard + secondCard
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        isBlackjack = true
        gameStarted = false
    } else {
        message = "You're out of the game!"
        isAlive = false
        gameStarted = false
    }
    messageEl.textContent = message
}

function newCardf() {
    if (gameStarted) {
        console.log("Drawing a new card from the desk!")
        newCard = Math.floor(Math.random() * 9) + 2
        console.log("New Card: " + newCard)
        sum += newCard
        renderGame()
    } else {
        console.log("Oyun henüz başlamadı")
    }
}

function renderGame() {
    cardsEl.textContent = cardsEl.textContent + " " + newCard
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        isBlackjack = true
        gameStarted = false
    } else {
        message = "You're out of the game!"
        isAlive = false
        gameStarted = false
    }
    messageEl.textContent = message
}

