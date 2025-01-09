
let container = document.getElementById("numbers");
let clearBtn = document.getElementById("clear");


function handleBoxEvents(event) {
    const targetBox = event.target; // Det specifika element som utlöste eventet
    switch (event.type) {

        case "mouseover":
            targetBox.classList.toggle("firstHover");
            if (targetBox.classList.contains("noHover")) {
                targetBox.classList.remove("noHover");
            }
            break;

        case "mouseout":
            targetBox.classList.toggle("firstHover"); // Hanterar hover-styling

            if (targetBox.classList.contains("whenClicked")) {
                targetBox.classList.add("noHover");
            }
            break;

        case "click":
            targetBox.classList.toggle("whenClicked");
            if (targetBox.classList.contains("whenClicked")) {
                targetBox.textContent = "";
            } else {
                targetBox.textContent = randomNumber(1, 100);
            }
            break;

    }
}

createButton.addEventListener("click", function () {
    loopThroughNumberBoxes((currentBox) => {
        currentBox.addEventListener("click", handleBoxEvents);
        currentBox.addEventListener("mouseover", handleBoxEvents);
        currentBox.addEventListener("mouseout", handleBoxEvents);
    });
});


