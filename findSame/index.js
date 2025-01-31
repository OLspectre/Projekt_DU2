
let container = document.getElementById("numbers");
let displayText = document.getElementById("showCopies");
let resetBtn = document.getElementById("reset");


resetBtn.addEventListener("click", () => {
    loopThroughNumberBoxes((currentBox) => {
        displayText.textContent = "Click on a number to find copies";
        currentBox.classList.remove("copy")
    });
});

container.addEventListener("click", (event) => {
    let counterOfCopy = 0;
    loopThroughNumberBoxes((currentBox) => {
        currentBox.classList.remove("copy");
    });

    if (event.target.classList.contains("numberBoxes")) {
        loopThroughNumberBoxes((currentBox) => {
            if (event.target.textContent == currentBox.textContent) {
                currentBox.classList.add("copy");
                counterOfCopy++;
            }
        });
        displayText.textContent = `${counterOfCopy} copies of the number ${event.target.textContent}`
    }
});