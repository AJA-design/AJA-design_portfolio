// ============================
// MOBILE NAVIGATION
// ============================

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {

navLinks.classList.toggle("active");

const isOpen = navLinks.classList.contains("active");

menuToggle.setAttribute("aria-expanded", isOpen);

menuToggle.textContent = isOpen ? "✕" : "☰";

});

// Close menu when a navigation link is clicked

document.querySelectorAll(".nav-links a").forEach(function (link) {

link.addEventListener("click", function () {

    navLinks.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.textContent = "☰";

});

});

// ============================
// AUTOMATIC COPYRIGHT YEAR
// ============================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

// ============================
// CONSOLE MESSAGE
// ============================

console.log("Adriel Jed Ansa's Portfolio Loaded Successfully.");

console.log("Welcome to my digital space!");