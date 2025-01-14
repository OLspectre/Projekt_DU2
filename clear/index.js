
function handleBoxEvents(event) {
    const targetBox = event.target;
    switch (event.type) {

        case "mouseover":
            targetBox.classList.toggle("firstHover");
            if (targetBox.classList.contains("noHover")) {
                targetBox.classList.remove("noHover");
            }
            break;

        case "mouseout":
            targetBox.classList.toggle("firstHover");

            if (targetBox.classList.contains("whenClicked")) {
                targetBox.classList.add("noHover");
            }
            break;

        case "click":
            targetBox.classList.toggle("whenClicked");
            if (targetBox.classList.contains("whenClicked")) {
                targetBox.textContent = "";
            } else {
                targetBox.textContent = randomNumber(0, 100);
            }
            break;
    }
}

let container = document.getElementById("numbers");
let clearBtn = document.getElementById("clear");

createButton.addEventListener("click", function () {
    loopThroughNumberBoxes((currentBox) => {
        currentBox.addEventListener("click", handleBoxEvents);
        currentBox.addEventListener("mouseover", handleBoxEvents);
        currentBox.addEventListener("mouseout", handleBoxEvents);
    });
});

clearBtn.addEventListener("click", function () {
    loopThroughNumberBoxes((currentBox) => {
        if (currentBox.classList.contains("whenClicked")) {
            currentBox.textContent = randomNumber(0, 100);
            currentBox.classList.remove("noHover")
            currentBox.classList.remove("whenClicked")
        }
    });
});

