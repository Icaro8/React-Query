import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, ReactAnimate } from "./styles";

export const ErroPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <ReactAnimate />
      <div>
        <h1>Desculpe não encontramos a pagina</h1>
        <p>Estamos te redirecionando para a home</p>
        <button onClick={() => navigate("/")}>Voltar</button>
      </div>
    </Container>
  );
};
