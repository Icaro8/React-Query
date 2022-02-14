import React from "react";
import { useLocation, Link } from "react-router-dom";

import { Container, ReactIcon, Navigation } from "./styles";

export function Header() {
  const Location = useLocation();
  return (
    <Container>
      <div>
        <ReactIcon />
        <h1>Página de Apresentção</h1>
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
