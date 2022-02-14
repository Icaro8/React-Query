import React, { useState } from "react";
import { userGithub } from "../../hooks/useUserGithub";

import { Container } from "./styles";

export function Home() {
  const { loading, user } = userGithub("Icaro8");
  const [count, setCount] = useState(0);
  return (
    <Container>
      <h1>{user?.bio}</h1>
    </Container>
  );
}
