// Display a welcome message when the website loads
window.addEventListener("load", function () {
    console.log("Student Portfolio Website Loaded Successfully!");
});

// Highlight navigation links when clicked
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        console.log("Navigating to: " + link.textContent);
    });
});