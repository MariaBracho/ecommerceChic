import { componentType } from "@shared/types/GeneralTypes";
import { HeaderContainer, Title, ProfileIcon } from "./style";

export default function Header(): componentType {
  const BRAND_NAME = "Ecommerce chic";
  return (
    <HeaderContainer>
      <Title>{BRAND_NAME}</Title>
      <ProfileIcon />
    </HeaderContainer>
  );
}
