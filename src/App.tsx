import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/home";
import { Respositories } from "./pages/repositories";
export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/repos" element={<Respositories />} />
    </Routes>
  );
}
