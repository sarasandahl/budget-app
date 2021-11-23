//börjar med att koppla på knappen och declara variabler
document.querySelector("button").addEventListener("click", countBudget)

let expenseList = [];
let incomeList = [];

function countBudget(e) {
    e.preventDefault();

    console.log("button works");

    const option = document.querySelector("select");
    console.log(option.value);

//1. om användare väljer + ska description och value hamna i inkomst-lista diven
//Pusha in kostnader i kostnadsLista

    const description = document.querySelector("#text").value;
    const value = document.querySelector("#number").value;

    if(option.value =="+") {
        // gör nått om det är positivt värde
        incomeList.push(value)
        const div = document.querySelector(".income-container");

        div.innerHTML += `<li> ${description}    ${value}</li>`
    } else if (option.value == "-") {
        // gör nått om det är negativt värde
        expenseList.push(value)
        const div = document.querySelector(".expenses-container");

        div.innerHTML += `<li> ${description}   ${value}</li>`
    } else {
        alert("App app app... du måste göra ett val");
    }

//2. om användare väljer - ska description och value hamna i kostnad-lista i diven
//Pusha in inkomster i inkomstLista

    console.log(expenseList , incomeList)

    var kostnadSumma = 0.0;

    for(var i= 0; i<expenseList.length; i++){
    //console.log(kostnadLista[i]);
        kostnadSumma += parseFloat(expenseList[i]);
    }

    var inkomstSumma = 0.0;

    for( var i=0; i<incomeList.length; i++){
    //console.log(inkomstLista[i]);
        inkomstSumma += parseFloat(incomeList[i]);
    }

    console.log(inkomstSumma, kostnadSumma)

    const val= inkomstSumma-kostnadSumma
    const vinstDiv = document.querySelector(".transaction-container");
    vinstDiv.textContent = val
}

//Pusha in bägge i transaktionerLista

//Få bara slutbelopp att hamna under Disponibelt belopp
//visa vinst i en div

//Loopa igenom listorna och lagra totalt inkomst och kostnad

//vinst = inkomst - kostnad

//Detta är en sämre kod. Det finns bättre lösningar
//Den bör göras mer optimerat. 
//Dåligt med tre if-statements
//Läser in samma data flera gånger
//Läser in alla tre statements
//Finns enklare lösningar v