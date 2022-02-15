import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { Repositorie } from "../interfaces/repositorie.interface";
export function useRepositories(name: string) {
  const [repositorieUser, setRepositorieUser] = useState<Repositorie[] | null>(
    null
  );
  const [inLoading, setInLoading] = useState(true);
  useQuery("repos.user", () =>
    axios
      .get(`https://api.github.com/users/${name}/repos`)
      .then((response) => {
        setRepositorieUser(response.data);
        setInLoading(false);
      })
      .catch((error) => setInLoading(true))
  );
  return { repositorieUser, inLoading };
}
