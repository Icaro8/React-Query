import React from "react";
import { useLocation, Link } from "react-router-dom";

import { Container } from "./styles";

export function Header() {
  const Location = useLocation();
  return (
    <Container>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/repos">Repositórios</Link>
      </nav>
    </Container>
  );
}
