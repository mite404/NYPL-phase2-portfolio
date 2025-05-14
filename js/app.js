import { applyTheme, getActiveTheme, saveTheme } from "./utils/saveTheme";

const themeToggleBtn = document.getElementById("themeToggle");

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
