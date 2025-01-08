

// Home menu link
let homeLink = document.createElement("a");
homeLink.textContent = "Home"
homeLink.setAttribute("href", "../index.html")
document.querySelector("nav").appendChild(homeLink);


let numberQuestion = document.createElement("div");
document.getElementById("creator").appendChild(numberQuestion);
numberQuestion.textContent = "How many numbers in the grid?"
let createNumberInput = document.createElement("input");
document.getElementById("creator").appendChild(createNumberInput);

let createButton = document.createElement("button");
createButton.textContent = "Create"
document.getElementById("creator").appendChild(createButton);

let numbersContainer = document.getElementById("numbers");

// Töm container vid laddning
numbersContainer.innerHTML = "";

function createNumberDivs(amount) {
    // Fyller container med celler
    numbersContainer.innerHTML = "";

    for (let i = 0; i < amount; i++) {
        let divWithNumber = document.createElement("div");
        divWithNumber.classList.add("numberBoxes");
        numbersContainer.appendChild(divWithNumber);
        divWithNumber.textContent = randomNumber(1, 100);
    }
}

function randomNumber(min, max) {
    // returnerar random siffra mellan min och max
    return Math.floor(min + (max - min) * Math.random());
}

createButton.addEventListener("click", function () {
    createNumberDivs(createNumberInput.value)
})







