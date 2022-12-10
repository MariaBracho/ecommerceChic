import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { IoIosCreate } from "react-icons/io";

export const NavbarContainer = styled.div`
  height: 60px;
  width: 80%;
  max-width: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  bottom: 18px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadiuses.xMedium};
  box-shadow: ${({ theme }) => theme.shadow.primary};
`;

export const HomeIcon = styled(AiFillHome)`
  height: 30px;
  width: 30px;
  color: ${({ theme }) => theme.colors.secondary};
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ShoppingCartIcon = styled(HiShoppingCart)`
  height: 30px;
  width: 30px;
  color: ${({ theme }) => theme.colors.secondary};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const CreateProductIcon = styled(IoIosCreate)`
  height: 30px;
  width: 30px;
  color: ${({ theme }) => theme.colors.secondary};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
