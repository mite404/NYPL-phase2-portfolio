// Light / Dark Mode theme logic
export function getActiveTheme() {
  return document.body.classList.contains("dark-mode") ? "light" : "dark-mode";
}

// Apply theme
export function applyTheme(theme) {
  document.body.classList.toggle("dark-mode", theme === "dark-mode");
}

// Save theme
export function saveTheme(theme) {
  localStorage.setItem("theme", theme === "dark-mode" ? "dark-mode" : "");
}
