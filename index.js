let myLeads = []
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")
const deleteBtn = document.querySelector("#delete-btn")

const leadsFromLocalStorger = localStorage.getItem("myLeads")

if (leadsFromLocalStorger) {
    myLeads = JSON.parse(leadsFromLocalStorger)
    render(myLeads)
}

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    inputEl.value = ""
})

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

function render(leads) {
    let listItems = ""

    for (let i = 0; i < leads.length; i++) {
        listItems += `            
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        ` // this is Template Literals(``) that allow to have multuple lines in js with using ${} to get the value 

    }
    ulEl.innerHTML = listItems
}