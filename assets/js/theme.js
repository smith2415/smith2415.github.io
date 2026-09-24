(function () {
  var root = document.documentElement;
  var toggle = document.querySelector(".theme-toggle");
  var storedTheme = localStorage.getItem("theme");
  var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  var initialTheme = storedTheme || (prefersDark ? "dark" : "light");

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (toggle) {
      var isDark = theme === "dark";
      toggle.setAttribute("aria-pressed", String(isDark));
      toggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
    }
  }

  setTheme(initialTheme);

  if (toggle) {
    toggle.addEventListener("click", function () {
      var nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      localStorage.setItem("theme", nextTheme);
      setTheme(nextTheme);
    });
  }
})();
