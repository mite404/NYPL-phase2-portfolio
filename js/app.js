import { applyTheme, getActiveTheme, saveTheme } from "./utils/saveTheme";

const themeToggleBtn = document.getElementById("themeToggle");
const projectItems = document.querySelectorAll(".project-card");
const filterBtns = document.querySelectorAll(".filter-btn");

// Set init state

// Load initial state
document.addEventListener("DOMContentLoaded", () => {
  const { theme } = loadPreferences();
  console.log("Loaded preferences.");
  applyTheme(theme);

  initializeApplication();
});

function initializeApplication() {
  const preferences = loadPreferences();

  if (preferences !== undefined) {
    console.log("Theme: ", preferences.theme);
  } else {
    console.log("No preferences found.");
  }
  console.log("Application initialized.");
}

function loadPreferences() {
  // Get theme or load `light` if none previously saved
  const theme = localStorage.getItem("theme") || "light";
  return { theme };
}

// Theme selector logic
// Event listener
themeToggleBtn.addEventListener("click", handleThemeToggle);

// Change theme on click
function handleThemeToggle() {
  const currentTheme = getActiveTheme();
  saveTheme(currentTheme);
  applyTheme(currentTheme);
}

// Popup link descriptors
document.querySelectorAll(".popup-live").forEach((link) => {
  link.setAttribute("title", "Visit Live Site" + link.textContent);
});
document.querySelectorAll(".popup-github").forEach((link) => {
  link.setAttribute("title", "See the Code" + link.textContent);
});

// Project filter buttons logic
filterBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    // Store clicked button
    const clickedBtn = event.currentTarget;

    // Remove active class from all buttons
    filterBtns.forEach((btn) => btn.classList.remove("active"));

    // Add active class to clicked button
    clickedBtn.classList.add("active");

    // Get filter value
    const filterValue = clickedBtn.getAttribute("data-filter");

    // Show/hide projects based on filter
    projectItems.forEach((item) => {
      if (
        filterValue === "all" ||
        item.getAttribute("data-category") === filterValue
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
