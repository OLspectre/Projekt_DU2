

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





