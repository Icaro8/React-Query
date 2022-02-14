import React from "react";
import { useRepositories } from "../../hooks/useRepositories";
export function Respositories() {
  const { inLoading, repositorieUser } = useRepositories("Icaro8");
  console.log(repositorieUser);
  return (
    <div>
      {repositorieUser?.map((element) => (
        <div key={element.id}>
          <h1>{element.name}</h1>
        </div>
      ))}
    </div>
  );
}
