import { useState, useEffect } from "react";

function useDarkSide() {
  // Initialize theme from localStorage or set it to the default value
  const savedTheme = typeof window !== 'undefined' ? localStorage.getItem("theme") : null;
  const [theme, setTheme] = useState(savedTheme || "light");
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    // Update localStorage theme whenever the theme changes
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}

export default useDarkSide;
