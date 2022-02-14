import React, { createContext, useContext, useState, useEffect } from "react";
import light from "../Themes/light";
import dark from "../Themes/dark";
interface PropsContext {
  theme: {};
}

const ThemeProvider = createContext({} as PropsContext);

export const ThemeContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(light);
  useEffect(() => {
    localStorage.setItem("theme", "light");
    function handleToggleTheme() {
      const themeStorage = localStorage.getItem("theme");
      if (themeStorage === "dark") {
        localStorage.setItem("theme.portfolio", "light");
        setTheme(light);
      }
      if (themeStorage === "light") {
        localStorage.setItem("theme.portfolio", "dark");
        setTheme(dark);
      }
    }
    handleToggleTheme();
  }, []);

  return (
    <ThemeProvider.Provider value={{ theme }}>
      {children}
    </ThemeProvider.Provider>
  );
};

export function useTheme() {
  const data = useContext(ThemeProvider);
  return data;
}
