import React from "react";
import { userPops } from "../../interfaces/user.interface";
import { ImStarFull } from "react-icons/im";
import { IoIosStarHalf } from "react-icons/io";
import { DataFormat } from "../../utils/converDate";
import { Container, ContainerContentText, FallwoersSection } from "./styles";

type DescriptionProps = Pick<
  userPops,
  "bio" | "followers" | "following" | "created_at"
>;

export const DescriptionProfile: React.FC<Partial<DescriptionProps>> = ({
  bio,
  created_at,
  followers,
  following,
}) => {
  return (
    <Container>
      <ContainerContentText>
        <p>{bio}</p>
      </ContainerContentText>
      <div>
        <FallwoersSection>
          <ImStarFull />
          {followers}
          <strong>followers</strong>
        </FallwoersSection>
        <FallwoersSection>
          <IoIosStarHalf />
          {following}
          <strong>following</strong>
        </FallwoersSection>
        <FallwoersSection>
          <strong>Criado em:</strong>
          {created_at ? DataFormat(created_at!) : "loading"}
        </FallwoersSection>
      </div>
    </Container>
  );
};
