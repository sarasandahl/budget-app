//Börjar med att koppla på knappen och declara variabler utanför funktionen
document.querySelector("button").addEventListener("click", countBudget)

let expenseList = [];
let incomeList = [];

function countBudget(e) {
    e.preventDefault();
//Aktivera select; välja plus eller minus
    const option = document.querySelector("select");
//Declara kostnad i siffror och textbeskrivning i input-fält 
    const description = document.querySelector("#text").value;
    const value = document.querySelector("#number").value;
//Pusha in inkomster i incomeList i div om användare väljer +
//Pusha in kostnader i expenseList i div om användare väljer -
    if(option.value =="+") {
        // gör något om det är positivt värde
        incomeList.push(value)
        const div = document.querySelector(".income-container");

        div.innerHTML += `<li> ${description}    ${value}</li>`
    } else if (option.value == "-") {
        // gör något om det är negativt värde
        expenseList.push(value)
        const div = document.querySelector(".expenses-container");

        div.innerHTML += `<li> ${description}   ${value}</li>`
    } else {
        // gör något om inget val görs
        alert("App app app... du måste göra ett val");
    }
    //förbered för befintligt saldo/slutbelopp i annan div
    //declara och loopa igenom listorna och lagra totalt inkomst och kostnad
    var minusSum = 0.0;

    for(var i= 0; i<expenseList.length; i++){
        minusSum += parseFloat(expenseList[i]);
    }

    var plusSum = 0.0;

    for( var i=0; i<incomeList.length; i++){
        plusSum += parseFloat(incomeList[i]);
    }
    //saldo/slutbelopp i tredje div //vinst = inkomst - kostnad
    const val = plusSum-minusSum
    const vinstDiv = document.querySelector(".transaction-container");
    vinstDiv.textContent = val
}