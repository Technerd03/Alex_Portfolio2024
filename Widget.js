// Button clicker widget that changes color when pressed

document.getElementById("action-button").addEventListener("click", function() {
    this.style.backgroundColor = "#940ae4"; // Change button color
    document.getElementById("display-message").textContent = "Hooray, you clicked the button, Hope you have a fantastic day :)";
});