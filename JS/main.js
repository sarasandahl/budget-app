// Börjar med att koppla på knappen och declara variabler utanför funktionen
document.querySelector("button").addEventListener("click", countBudget)

let expenseList = [];
let incomeList = [];

function countBudget(e) {
    e.preventDefault();
    // Declara select; välja plus eller minus
    const option = document.querySelector("select");
    // Declara kostnad i siffror- och textbeskrivning i input-fält 
    const description = document.querySelector("#text").value;
    const amount = document.querySelector("#number").value;
    // Kolla att båda textfält är ifyllda för att kunna gå vidare
    if (description == "" || amount == "") {
        alert("App app app... inget fält får vara tomt");
    } else { 

        if(option.value =="+") {
            // Pusha in inkomster i incomeList i div om användare väljer +
            incomeList.push(amount)
            const div = document.querySelector(".income-container");
            div.innerHTML += `<li> ${description}    ${amount}</li>`
        } else if (option.value == "-") {
            // Pusha in kostnader i expenseList i div om användare väljer -
            expenseList.push(amount)
            const div = document.querySelector(".expenses-container");
            div.innerHTML += `<li> ${description}   ${amount}</li>`
        } else {
            // Gör något om inget val görs
            alert("App app app... du måste göra ett val");
        }
    }
    // Ropa på nästa funktion
    totalCalculation ();
}
// En till funktion för saldo/slutbelopp i en tredje div
function totalCalculation () {
    // Declara och loopa igenom listorna och lagra totalt inkomst och kostnad
    var minusSum = 0.0;

    for(var i= 0; i<expenseList.length; i++){
        minusSum += parseFloat(expenseList[i]);
    }

    var plusSum = 0.0;

    for(var i=0; i<incomeList.length; i++){
        plusSum += parseFloat(incomeList[i]);
    }
    // Uttäkningen; vinst = inkomst - kostnad, i en tredje div
    const val = plusSum-minusSum
    const vinstDiv = document.querySelector(".transaction-container");
    vinstDiv.textContent = val
}