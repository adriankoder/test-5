const buttonClass = "color";
const originalButtonClass = "button2";

function resetButtons(buttons, originalClass, activeClass) {
    buttons.forEach(button => {
        button.classList.remove(activeClass);
        button.classList.add(originalClass);
    });
}

function teamswitshBUTTON(element, colorClass, buttonClass) {
    // Bytt klassen til elementet som blir klikket
    if (element.classList.contains(buttonClass)) {
        element.classList.remove(buttonClass);
        element.classList.add(colorClass);
        console.log("lite");
    } else if (element.classList.contains(colorClass)) {
        element.classList.remove(colorClass);
        element.classList.add(buttonClass);
        console.log("dark");
    } else {
        console.log("Ingen av klassene funnet");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Velg alle elementer med klassen 'test'
    const buttons = document.querySelectorAll(".test");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // Tilbakestill alle knapper til original klasse
            resetButtons(buttons, originalButtonClass, buttonClass);

            // Bytt klasse på den klikkede knappen
            teamswitshBUTTON(button, buttonClass, originalButtonClass);
        });
    });
});

export { teamswitshBUTTON };
