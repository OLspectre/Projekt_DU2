// Home menu link
let homeLink = document.createElement("a");
let numberQuestion = document.createElement("div");
let createNumberInput = document.createElement("input");
let createButton = document.createElement("button");
let numbersContainer = document.getElementById("numbers");

homeLink.textContent = "Home"
homeLink.setAttribute("href", "../index.html")
document.querySelector("nav").appendChild(homeLink);
createNumberInput.value = 95;
document.getElementById("creator").appendChild(numberQuestion);
numberQuestion.textContent = "How many numbers in the grid?"
document.getElementById("creator").appendChild(createNumberInput);

createButton.textContent = "Create"
document.getElementById("creator").appendChild(createButton);


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

// LOOPAR IGENOM ALLA NUMBERBOXES
function loopThroughNumberBoxes(callback) {
    for (let currentBox of document.querySelectorAll("#numbers div")) {
        let number = Number(currentBox.textContent);
        callback(currentBox, number); // Här anropas callbacken
    }
}

createButton.addEventListener("click", function () {
    createNumberDivs(createNumberInput.value)
})







