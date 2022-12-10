import styled from "styled-components";
import { CgProfile } from "react-icons/cg";

export const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
  position: absolute;
  width: fit-content;
  height: fit-content;
  right: 0px;
  left: 0px;
  top: 0px;
  bottom: 0px;
  margin: auto;
  color: ${({ theme }) => theme.colors.dark};
`;

export const ProfileIcon = styled(CgProfile)`
  height: 42px;
  width: 42px;
  justify-self: end;
  color: ${({ theme }) => theme.colors.primary};
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  display: grid;
  position: relative;
  grid-template-columns: 90% 10%;
  align-items: center;
  justify-content: center;
`;
