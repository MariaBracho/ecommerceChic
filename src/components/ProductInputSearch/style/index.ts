import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

export const InputSearchContainer = styled.div`
  width: 100%;
  max-width: 500px;
  height: 47px;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.dark};
  border-radius: ${({ theme }) => theme.borderRadiuses.medium};
  box-shadow: ${({ theme }) => theme.shadow.primary};
`;

export const Input = styled.input`
  width: 90%;
  height: 100%;
  border: 0px;
  padding: 6px;
  outline: none;
`;

export const IconContainer = styled.span`
  width: 10%;
  height: 100%;
  display: grid;
  padding: 4px;
  place-content: center;
`;

export const Icon = styled(BsSearch)`
  height: 24px;
  width: 24px;
  color: ${({ theme }) => theme.colors.secondary};
`;
