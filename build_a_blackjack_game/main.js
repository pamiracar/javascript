
let firstCard = 10
let secondCard = 4
let isBlackjack = false
let isAlive = true
let sum = firstCard + secondCard
let message = ""

let messageEl = document.getElementById("message-el")
console.log(messageEl)

let sumEl = document.querySelector("#sum-el")
console.log(sumEl)

let cardsEl = document.getElementById("cards-el")



function startGame() {
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        isBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

