import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import { Home } from "./pages/home";
import { Respositories } from "./pages/repositories";
import light from "./Themes/light";
import dark from "./Themes/dark";
import { Layout } from "./layout";
import GlobaStyle from "./styles/GlobalStyles";
import { ErroPage } from "./pages/error";

export function App() {
  const [theme, setTheme] = useState(light);
  useEffect(() => {
    function hadleTheme() {
      const themeStorage = localStorage.getItem("theme");
      if (themeStorage === "light") {
        setTheme(dark);
      }
      if (themeStorage === "dark") {
        setTheme(light);
      }
    }
    hadleTheme();
  }, []);
  function handleToogleTheme() {
    if (theme === light) {
      setTheme(dark);
      localStorage.setItem("theme", theme.title);
      console.log(theme);
    }
    if (theme === dark) {
      setTheme(light);
      localStorage.setItem("theme", theme.title);
      console.log(theme);
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Layout handleTheme={handleToogleTheme}>
        <GlobaStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repos" element={<Respositories />} />
        </Routes>
      </Layout>
      <Routes>
        <Route path="*" element={<ErroPage />} />
      </Routes>
    </ThemeProvider>
  );
}
