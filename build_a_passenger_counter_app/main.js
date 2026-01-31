let count = 0;
let countEl = document.getElementById("counter-el");
let prev_entry = document.getElementById("prev-entry");

function increment() {
    console.log("Increment button was clicked!");
    count += 1;
    countEl.textContent = count;
}

function decrement() {
    console.log("Decrement button was clicked!");
    count -= 1;
    countEl.textContent = count;
}

function save() {
    console.log(count);
    prev_entry.textContent = prev_entry.textContent + count + " - ";
}
function reset() {
    console.log(count)
    count = 0
    countEl.textContent = count
}

