import { useEffect, useState } from "react";
import { themeContext } from "./index";

const { Provider } = themeContext;

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = (theme) => {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  };

  useEffect(() => {
    const systemColorScheme = window.matchMedia(
      "(prefers-color-scheme: light)"
    );

    const updateTheme = () => {
      const theme = localStorage.getItem("theme");

      if (theme === "dark" || theme === "light") {
        toggleTheme(theme);
        return;
      }

      if (systemColorScheme.matches) {
        toggleTheme("light");
        return;
      }
    };

    const handleSystemColorSchemeChange = (e) => {
      if (e.matches) {
        toggleTheme("light");
      } else {
        toggleTheme("dark");
      }
    };

    systemColorScheme.addEventListener("change", handleSystemColorSchemeChange);

    updateTheme();

    return () => {
      systemColorScheme.removeEventListener(
        "change",
        handleSystemColorSchemeChange
      );
    };
  }, [theme]);

  return <Provider value={{ theme, toggleTheme }}>{children}</Provider>;
}

export default ThemeProvider;
