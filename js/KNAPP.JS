const buttonClass = "color";
const originalButtonClass = "button2";
const hovedsideClass = "Hovedside";

function resetButtons(buttons, originalClass, activeClass) {
    buttons.forEach(button => {
        button.classList.remove(activeClass);
        button.classList.remove(hovedsideClass);
        button.classList.add(originalClass);
    });
}

function teamswitshBUTTON(element, originalButtonClass, buttonClass) {
    if (element.classList.contains(buttonClass)) {
        element.classList.remove(buttonClass);
        element.classList.add(originalButtonClass);
        console.log("lite");
    } else if (element.classList.contains(originalButtonClass)) {
        element.classList.remove(originalButtonClass);
        element.classList.add(buttonClass);
        console.log("dark");
    } else if (element.classList.contains(hovedsideClass)) {
        element.classList.remove(hovedsideClass);
        element.classList.add(originalButtonClass);
        console.log("1");
    } else {
        console.log("Ingen av klassene funnet");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".test");

    buttons.forEach(button => {
        button.addEventListener("mouseover", () => {
            resetButtons(buttons, originalButtonClass, buttonClass);
            teamswitshBUTTON(button, buttonClass, originalButtonClass);
        });
    });
});

export { teamswitshBUTTON };
