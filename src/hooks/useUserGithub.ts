import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

interface userPops {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  name: string;
  bio: string;
  public_repos: string;
  followers: number;
  following: string;
  created_at: string;
}

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
