import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Home } from "./pages/home";
import { Respositories } from "./pages/repositories";
import dark from "./Themes/dark";

export function App() {
  return (
    <Routes>
      <ThemeProvider theme={dark}>
        <Route path="/" element={<Home />} />
        <Route path="/repos" element={<Respositories />} />
      </ThemeProvider>
    </Routes>
  );
}
