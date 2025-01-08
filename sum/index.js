
let container = document.getElementById("numbers");
let showSumOfAllNumbers = document.getElementById("sumResultAll");
let showSumOfMarked = document.getElementById("sumResultMarked");
let resetBtn = document.getElementById("reset");


function sumOfAllNumbers() {
    let allNumbers = document.querySelectorAll("#numbers div");
    let sum = 0;
    for (let currentNumber of allNumbers) {
        let number = Number(currentNumber.textContent)
        sum += number;
    }
    showSumOfAllNumbers.innerHTML = sum;
}

let markedSum = 0;

createButton.addEventListener("click", function () {
    createNumberDivs(createNumberInput.value)
    sumOfAllNumbers();
});

container.addEventListener("click", (event) => {
    if (event.target.classList.contains("numberBoxes")) {

        event.target.classList.add("marked");

        let markedNumber = Number(event.target.textContent);
        // Lägg till siffran till summan
        markedSum += markedNumber;
        // Uppdatera summan i displayen
        showSumOfMarked.textContent = markedSum;
    }
});

