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

// Light / Dark Mode theme logic
function getActiveTheme() {
  return document.body.classList.contains("dark-mode") ? "light" : "dark-mode";
}

// Apply theme
function applyTheme(theme) {
  document.body.classList.toggle("dark-mode", theme === "dark-mode");
}
// Save theme
function saveTheme(theme) {
  localStorage.setItem("theme", theme === "dark-mode" ? "dark-mode" : "");
}

// Event listener
themeToggleBtn.addEventListener("click", handleThemeToggle);

// Change theme on click
function handleThemeToggle() {
  const currentTheme = getActiveTheme();
  saveTheme(currentTheme);
  applyTheme(currentTheme);
}
