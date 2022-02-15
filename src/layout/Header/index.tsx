import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useTheme } from "styled-components";
import {
  Container,
  ReactIcon,
  Navigation,
  ThemeController,
  ContainerController,
} from "./styles";
import { MdNightlight, MdLightMode } from "react-icons/md";

interface PropsHeader {
  handleTheme: () => void;
}

export function Header({ handleTheme }: PropsHeader) {
  const theme = useTheme();
  const Location = useLocation();

  return (
    <Container>
      <div className="first-child">
        <ReactIcon />
        <h1>Front-End Developer</h1>
      </div>
      <ContainerController>
        <Navigation>
          <nav>
            <Link to="/" className={Location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
            <Link
              to="/repos"
              className={Location.pathname === "/repos" ? "repo" : ""}
            >
              Repositórios
            </Link>
          </nav>
        </Navigation>
        <ThemeController>
          {theme.title === "dark" ? (
            <MdLightMode onClick={handleTheme} />
          ) : (
            <MdNightlight onClick={handleTheme} />
          )}
        </ThemeController>
      </ContainerController>
    </Container>
  );
}
