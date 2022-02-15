import styled from "styled-components";
import { darken } from "polished";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  border: 1px solid;
  border-color: ${darken(0.2, "#9f7aea")};
  width: 350px;
  margin: auto;
  border-radius: 5px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    strong {
      display: flex;
      align-items: center;
    }
  }
`;

export const ContainerContentText = styled.div`
  font-size: 20px;
  font-family: "Montserrat", sans-serif;
`;

export const FallwoersSection = styled.section`
  display: flex;
  gap: 5px;
  align-items: center;
  svg {
    color: #fcfd01;
  }
`;
