let myLeads = []
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value = ""
})

function renderLeads() {
    let listItems = ""

    for (let i = 0; i < myLeads.length; i++) {
        let temStr = `            
        <li>
        <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
        </li>
        ` // this is Template Literals(``) that allow to have multuple lines in js with using ${} to get the value 
        listItems += temStr

    }
    ulEl.innerHTML = listItems
}