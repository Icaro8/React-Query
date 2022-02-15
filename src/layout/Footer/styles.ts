import styled from "styled-components";
import { SiTypescript, SiStyledcomponents, SiNextdotjs } from "react-icons/si";
import { DiSass } from "react-icons/di";
import { FaReact } from "react-icons/fa";
export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 10px;
  background-color: var(--purple-400);
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  margin-top: 67px;
`;
export const ContainerAtribuites = styled.div`
  display: flex;
  gap: 25px;
  svg {
    width: 25px;
    height: 25px;
  }
`;
export const TypeSCriptIcon = styled(SiTypescript)`
  color: #2d79c7;
`;

export const StyledIcon = styled(SiStyledcomponents)`
  color: #fcfd01;
`;

export const NexIcon = styled(SiNextdotjs)`
  color: #000000;
`;

export const SassIcon = styled(DiSass)`
  color: #cf649a;
`;

export const ReactIcon = styled(FaReact)`
  color: #00d8ff;
`;

/*
  SiTypescript
  FaReact
  SiStyledcomponents
  DiSass
  SiNextdotjs
*/
