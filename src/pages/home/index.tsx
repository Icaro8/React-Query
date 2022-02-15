import React, { useState } from "react";
import { userGithub } from "../../hooks/useUserGithub";

import { Container } from "./styles";
import { Profile } from "../../components/Profile";
import { DescriptionProfile } from "../../components/DescriptionProfile";
export function Home() {
  const { loading, user } = userGithub("Icaro8");
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Profile avatar_url={user?.avatar_url} name={user?.name} />
      <DescriptionProfile
        bio={user?.bio}
        created_at={user?.created_at}
        followers={user?.followers}
        following={user?.following}
      />
    </Container>
  );
}
