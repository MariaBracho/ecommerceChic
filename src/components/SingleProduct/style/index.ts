import styled from "styled-components";
import { MdOutlineAdd } from "react-icons/md";

export const SingleProductContainer = styled.div`
  height: 200px;
  width: 140px;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 160px;
  object-fit: fill;
  border-radius: ${({ theme }) => theme.borderRadiuses.xMedium};
`;

export const Price = styled.p`
  font-size: 14px;
  margin: 0px;
  color: ${({ theme }) => theme.colors.secondary};
`;
export const ProductName = styled.p`
  margin: 0px;
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.dark};
`;

export const PriceAndNameContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
`;

export const AddIconContainer = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadiuses.rounded};
`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddIcon = styled(MdOutlineAdd)`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.white};
`;
