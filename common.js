

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
    for (let i = 0; i < amount; i++) {
        let divWithNumber = document.createElement("div");
        numbersContainer.appendChild(divWithNumber);
        divWithNumber.textContent = "77";
    }
}

createButton.addEventListener("click", function () {
    createNumberDivs(createNumberInput.value)
})


// randomNumber(1, 100);







