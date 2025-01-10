
let container = document.getElementById("numbers");
let findBtn = document.getElementById("findNumbers");
let sumInputDOM = document.getElementById("sumInput");



function markBoxes(currentBoxA, currentBoxB, markedBoxes) {
    currentBoxA.classList.add("marked");
    currentBoxB.classList.add("marked");

    markedBoxes.push(currentBoxA);
    markedBoxes.push(currentBoxB);
}

findBtn.addEventListener("click", () => {
    let markedCount = 0; // Räknar hur många element som markerats
    let sumTarget = Number(sumInputDOM.value);
    let markedBoxes = [];

    // Loop genom alla boxar
    loopThroughNumberBoxes((currentBoxA, numberA) => {
        if (markedCount >= 2) return; // Avbryt om 2 element redan har markerats

        loopThroughNumberBoxes((currentBoxB, numberB) => {
            // Kolla om det är olika element och om deras summa är lika med target
            if (currentBoxA !== currentBoxB && numberA + numberB === sumTarget) {
                // Kontrollera om vi redan markerat någon av dessa element
                if (!markedBoxes.includes(currentBoxA) && !markedBoxes.includes(currentBoxB)) {

                    markBoxes(currentBoxA, currentBoxB, markedBoxes);
                    markedCount = 2; // Uppdatera räknaren för markerade element                    
                }
            }
        });
    });
});