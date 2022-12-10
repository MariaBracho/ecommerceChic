import styled from "styled-components";
import { MdOutlineAdd, MdDelete } from "react-icons/md";
import { AiOutlineLine } from "react-icons/ai";

export const ProductCartContainer = styled.div`
  height: 165px;
  width: auto;
  padding: 10px;
  max-width: 360px;
  display: flex;
  align-items: center;
  grid-template-columns: 115px 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadiuses.medium};
  box-shadow: ${({ theme }) => theme.shadow.primary};
`;

export const ProductImg = styled.img`
  width: 125px;
  height: 140px;
  object-fit: fill;
  border-radius: ${({ theme }) => theme.borderRadiuses.xMedium};
`;

export const ProductNameAndPriceContainer = styled.div`
  width: 100%;
  margin-left: 10px;
`;

export const ProductName = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 0;
  font-size: 18px;
`;

export const Number = styled.p`
  color: ${({ theme }) => theme.colors.dark};
  font-weight: bolder;
  font-size: 22px;
  line-height: 0px;
  margin: auto 0px;
`;

export const Price = styled.p`
  color: ${({ theme }) => theme.colors.dark};
  font-weight: bolder;
  line-height: 0;
  font-size: 22px;
`;

export const Button = styled.button`
  height: 30px;
  width: 30px;
  display: flex;
  border: 0px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadiuses.medium};
  background: ${({ theme }) => theme.colors.background};
`;

export const AddIcon = styled(MdOutlineAdd)`
  height: 24px;
  width: 24px;
  color: ${({ theme }) => theme.colors.white};
`;

export const LessIcon = styled(AiOutlineLine)`
  height: 24px;
  width: 24px;
  color: ${({ theme }) => theme.colors.white};
`;

export const AmountContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  grid-column: 2/4;
  grid-row: 2/3;
  width: 150px;
`;

export const DeleteIcon = styled(MdDelete)`
  color: ${({ theme }) => theme.colors.primary};
  height: 24px;
  width: 24px;
  cursor: pointer;
`;

export const Section = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
