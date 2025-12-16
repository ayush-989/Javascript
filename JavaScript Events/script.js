// Event Propagation in JavaScript
document.querySelector("div").addEventListener("click", () => {
    console.log("Div clicked");
}, true); // Capturing phase

button.addEventListener("click", (e) => {
    console.log("Button clicked");
    e.stopPropagation(); // Stops propagation
});
