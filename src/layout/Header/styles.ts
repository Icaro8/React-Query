import styled from "styled-components";
import { SiReacttable } from "react-icons/si";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 25px;
  background-color: var(--purple-400);
  color: var(--white);
  padding: 25px;
  a {
    color: var(--white);
  }
  .first-child {
    display: flex;
    align-items: center;
  }
`;

export const ReactIcon = styled(SiReacttable)`
  width: 40px;
  height: 40px;
  color: var(--react-color);
  animation: rotate 2.5s linear infinite;
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Navigation = styled.div`
  nav {
    display: flex;
    gap: 25px;
  }
`;

export const ThemeController = styled.div`
  cursor: pointer;
  svg {
    width: 25px;
    height: 25px;
  }
`;

export const ContainerController = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-shrink: 1;
`;
