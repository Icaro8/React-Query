import React from "react";

import {
  Container,
  TypeSCriptIcon,
  StyledIcon,
  NexIcon,
  SassIcon,
  ReactIcon,
  ContainerAtribuites,
} from "./styles";

export function Footer() {
  return (
    <Container>
      <strong>&copy;Todos direitos reservados</strong>
      <ContainerAtribuites>
        <TypeSCriptIcon />
        <StyledIcon />
        <NexIcon />
        <SassIcon />
        <ReactIcon />
      </ContainerAtribuites>
    </Container>
  );
}
