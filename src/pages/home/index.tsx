import React, { useState } from "react";
import { userGithub } from "../../hooks/useUserGithub";

export function Home() {
  const { loading, user } = userGithub("Icaro8");
  const [count, setCount] = useState(0);
  console.log(user);
  return (
    <div>
      <h1>{user?.bio}</h1>
    </div>
  );
}
