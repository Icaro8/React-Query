import React from "react";
import { userPops } from "../../interfaces/user.interface";

type ProfileProps = Pick<userPops, "name" | "avatar_url">;

export const Profile: React.FC<ProfileProps> = ({ avatar_url, name }) => {
  return (
    <>
      <></>
    </>
  );
};
