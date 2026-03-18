let saveButton = document.getElementById("save-button")
let deleteButton = document.getElementById("delete-button")
let saveTabButton = document.getElementById("save-tab-button")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let myLeads = []


renderLeads(myLeads)

let leadsFromLocalS = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalS)

if (leadsFromLocalS) {
    myLeads = leadsFromLocalS
    renderLeads(myLeads)
}

saveButton.addEventListener("click", function () {
    listItems = ""
    console.log("Button clicked from add event listener")
    let inputValue = inputEl.value
    myLeads.push(inputValue)
    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    renderLeads(myLeads)

    console.log(localStorage.getItem("myLeads"))
})

function renderLeads(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        const e = leads[i];
        listItems += `
            <li>
                <a href='${e}' target='_blank'>${e}</a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteButton.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    renderLeads(myLeads)
})




