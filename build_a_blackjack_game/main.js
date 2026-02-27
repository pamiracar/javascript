
let firstCard = 10
let secondCard = 11
let isBlackjack = false
let isAlive = true
let sum = firstCard + secondCard
let message = ""

let messageEl = document.getElementById("message-el")
console.log(messageEl)


function startGame() {
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        isBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    console.log(message)
    messageEl.textContent = message
}

