let saveButton = document.getElementById("save-button")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const myLeads = []

saveButton.addEventListener("click", function () {
    listItems = ""
    console.log("Button clicked from add event listener")
    let inputValue = inputEl.value
    myLeads.push(inputValue)
    inputEl.value = ""

    for (let i = 0; i < myLeads.length; i++) {
        const e = myLeads[i];
        //ulEl.innerHTML += "<li>" + e + "</li> "
        // İki yöntem de kullanılabilir
        /*
        const li = document.createElement("li")
        li.textContent = e
        ulEl.append(li)
        */

        listItems += `
            <li>
                <a href='${e}' target='_blank'>${e}</a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
})

let listItems = ""


