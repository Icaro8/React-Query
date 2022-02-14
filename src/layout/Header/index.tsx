import React from "react";
import { useLocation, Link } from "react-router-dom";

import { Container, ReactIcon, Navigation } from "./styles";

interface PropsHeader {
  handleTheme: () => void;
}

export function Header({ handleTheme }: PropsHeader) {
  const Location = useLocation();
  return (
    <Container>
      <div>
        <ReactIcon />
        <h1>Página de Apresentção</h1>
        <button onClick={handleTheme}> CLique aq</button>
      </div>
      <Navigation>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/repos">Repositórios</Link>
        </nav>
      </Navigation>
    </Container>
  );
}
