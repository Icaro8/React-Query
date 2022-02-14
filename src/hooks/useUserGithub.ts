import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { userPops } from "../interfaces/user.interface";

export function userGithub(name: string) {
  const [user, setUser] = useState<userPops | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useQuery("user.github", () =>
    axios
      .get(`http://api.github.com/users/${name}`)
      .then((response) => setUser(response.data))
      .catch((error) => setLoading(false))
  );

  return { user, loading };
}
