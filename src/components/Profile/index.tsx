import React from "react";
import { userPops } from "../../interfaces/user.interface";

type ProfileProps = Pick<userPops, "name" | "avatar_url">;

import { Container } from "./styles";

export const Profile: React.FC<Partial<ProfileProps>> = ({
  avatar_url,
  name,
}) => {
  return (
    <Container>
      <div>
        <img src={avatar_url} alt={name} />
      </div>
      <div>
        <h1>{name}</h1>
      </div>
    </Container>
  );
};
