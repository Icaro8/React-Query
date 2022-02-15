import React from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";

import { Container } from "./styles";

interface PropsLayout {
  handleTheme: () => void;
}

export const Layout: React.FC<PropsLayout> = ({ handleTheme, children }) => {
  return (
    <Container>
      <Header handleTheme={handleTheme} />
      {children}
      <Footer />
    </Container>
  );
};
