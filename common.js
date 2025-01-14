
function createNumberDivs(amount) {
    numbersContainer.innerHTML = "";

    for (let i = 0; i < amount; i++) {
        let divWithNumber = document.createElement("div");
        divWithNumber.classList.add("numberBoxes");
        numbersContainer.appendChild(divWithNumber);
        divWithNumber.textContent = randomNumber(0, 100);
    }
}

function randomNumber(min, max) {
    return Math.floor(min + (max - min) * Math.random());
}

function loopThroughNumberBoxes(callback) {
    for (let currentBox of document.querySelectorAll("#numbers div")) {
        let number = Number(currentBox.textContent);
        callback(currentBox, number);
    }
}


let homeLink = document.createElement("a");
let numberQuestion = document.createElement("div");
let createNumberInput = document.createElement("input");
let createButton = document.createElement("button");
let numbersContainer = document.getElementById("numbers");

homeLink.textContent = "Home"
homeLink.setAttribute("href", "../index.html")
document.querySelector("nav").appendChild(homeLink);

document.getElementById("creator").appendChild(numberQuestion);
numberQuestion.textContent = "How many numbers in the grid?"

document.getElementById("creator").appendChild(createNumberInput);
createNumberInput.value = 95;

createButton.textContent = "Create"
document.getElementById("creator").appendChild(createButton);

numbersContainer.innerHTML = "";


createButton.addEventListener("click", function () {
    createNumberDivs(createNumberInput.value)
})







