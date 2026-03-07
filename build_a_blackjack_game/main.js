
let firstCard = 0;
let secondCard = 0;
let isBlackjack = false
let isAlive = true
let sum = 0
let message = ""
let newCard = 0

let player = {
    playerName: "Pamir",
    playerChips: 145,
    sayHello : function() {
        console.log("Merhaba")
    }
}

player.sayHello()

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.playerName + ": $" + player.playerChips

let messageEl = document.getElementById("message-el")
console.log(messageEl)

let sumEl = document.querySelector("#sum-el")
console.log(sumEl)

let cardsEl = document.getElementById("cards-el")
let gameStarted = false


function randomNumber() {
    let number =  Math.floor(Math.random() * 9) + 2
    if (number > 10) {
        return 10
    } else if (number === 1) {
        return 11
    } else {
        return number
    }
}

function startGame() {
    gameStarted = true
    firstCard = randomNumber()
    secondCard = randomNumber()
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
        newCard = randomNumber()
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

