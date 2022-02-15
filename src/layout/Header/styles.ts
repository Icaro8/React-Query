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
  @media screen and (max-width: 412px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    position: relative;

    gap: 25px;
    background-color: var(--purple-400);
    color: var(--white);

    a {
      color: var(--white);
      font-size: 20px;
    }
    .first-child {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      margin-left: 45px;
      h1 {
        font-family: "Montserrat", sans-serif;
      }
    }
  }
`;

export const ReactIcon = styled(SiReacttable)`
  @media screen and (max-width: 412px) {
    width: 60px;
    height: 60px;
    color: var(--react-color);
    animation: rotate 2.5s linear infinite;
    @keyframes rotate {
      100% {
        transform: rotate(360deg);
      }
    }
  }
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
    a {
      padding: 10px;
    }
    .active {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      &::after {
        content: "";
        position: absolute;
        background-color: var(--gray-50);
        width: 50px;
        height: 3px;
        bottom: 0;
        border-radius: 3px;
      }
    }
    .repo {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      &::after {
        content: "";
        position: absolute;
        background-color: var(--gray-50);
        width: 150px;
        height: 3px;
        bottom: 0;
        border-radius: 3px;
      }
    }
  }
`;

export const ThemeController = styled.div`
  @media screen and (max-width: 415px) {
    position: absolute;
    top: 10px;
    right: 10px;
    svg {
      width: 40px;
      height: 40px;
    }
  }
  cursor: pointer;
`;

export const ContainerController = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-shrink: 1;
`;
