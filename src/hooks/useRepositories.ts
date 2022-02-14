import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

interface Repositorie {
  id: number;
  name: string;
  description: string;
  url: string;
  size: number;
  created_at: string;
  updated_at: string;
  language: string;
  visibility: string;
  stargazers_count: number;
  watchers_count: number;
}

export function useRepositories(name: string) {
  const [repositorieUser, setRepositorieUser] = useState<Repositorie[] | null>(
    null
  );
  const [inLoading, setInLoading] = useState(true);
  useQuery("repos.user", () =>
    axios
      .get(`http://api.github.com/users/${name}/repos`)
      .then((response) => {
        setRepositorieUser(response.data);
        setInLoading(false);
      })
      .catch((error) => setInLoading(true))
  );
  return { repositorieUser, inLoading };
}
