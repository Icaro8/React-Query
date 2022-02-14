import React from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";

interface PropsLayout {
  handleTheme: () => void;
}

export const Layout: React.FC<PropsLayout> = ({ handleTheme, children }) => {
  return (
    <>
      <Header handleTheme={handleTheme} />
      {children}
      <Footer />
    </>
  );
};
