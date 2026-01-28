let count = 0;
let countEl = document.getElementById("counter-el");
let prev_entry = document.getElementById("prev-entry");

function increment() {
    console.log("Increment button was clicked!");
    count += 1;
    countEl.innerText = count;
}

function decrement() {
    console.log("Decrement button was clicked!");
    count -= 1;
    countEl.innerText = count;
}

function save() {
    console.log(count);
    prev_entry.innerText = prev_entry.innerText + count + " - ";
}

