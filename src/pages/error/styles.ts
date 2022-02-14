import styled from "styled-components";
import { SiReacttable } from "react-icons/si";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  width: 100%;
  height: 100%;
  div {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 20px;
    button {
      display: block;
      margin: auto;
      margin-top: 50px;
      width: 250px;
      height: 45px;
      background-color: var(--purple-400);
      color: var(--white);
      font-weight: bold;
      border-radius: 2px;
      font-size: 18px;
      transform: filter 0.2s;
      &:hover {
        filter: brightness(0.7);
      }
    }
  }
`;

export const ReactAnimate = styled(SiReacttable)`
  width: 150px;
  height: 150px;
  color: var(--purple-400);
  animation: rotate 2s linear infinite alternate;
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;
