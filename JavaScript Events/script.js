// Event Propagation in JavaScript
document.querySelector("div").addEventListener("click", () => {
    console.log("Div clicked");
}, true); // Capturing phase

button.addEventListener("click", (e) => {
    console.log("Button clicked");
    e.stopPropagation(); // Stops propagation
});

// Event Delegation
document.querySelector("ul").addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        console.log(`Clicked on item: ${e.target.textContent}`);
    }
});