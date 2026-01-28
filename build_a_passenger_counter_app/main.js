// document.getElementById("counter-el").innerText = 5;
//
// let myAge = 16;
// //console.log(myAge);
//
// let firstBatch = 5;
// let secondBatch = 7;
//
// let count = firstBatch + secondBatch  
// console.log(count);
//
// console.log("----------");
//
// let humanDogRatio = 7;
// let myDogAge = myAge*humanDogRatio;
// console.log(myDogAge);
//
// console.log("----------");
//
// let bonusPoints = 50;
// bonusPoints = bonusPoints + 50;
// bonusPoints = bonusPoints - 75;
// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints)

let count = 0;
let countEl = document.getElementById("counter-el");
let prev_entry = document.getElementById("prev-entry");

function increment() {
    console.log("Increment button was clicked!");
    count = count + 1;
    countEl.innerText = count;
}

function decrement() {
    console.log("Decrement button was clicked!");
    count = count - 1;
    countEl.innerText = count;
}

function save() {
    console.log(count);
    prev_entry.innerText = prev_entry.innerText + count + " - ";
}

