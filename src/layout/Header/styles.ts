import styled from "styled-components";

import { SiReacttable } from "react-icons/si";

export const Container = styled.div``;

export const ReactIcon = styled(SiReacttable)`
  animation: rotate 2s linear infinite;
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Navigation = styled.div`
  flex-shrink: 1;
  nav {
    display: flex;
    gap: 25px;
  }
`;
