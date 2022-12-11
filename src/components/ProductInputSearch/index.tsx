import { componentType } from "../../utils/types/GeneralTypes";
import { InputSearchContainer, Input, IconContainer, Icon } from "./style";

interface SearchProps {
  handledSearchProduct: () => void;
  placeholder: string;
}

export default function ProductInputSearch({
  handledSearchProduct,
  placeholder,
}: SearchProps): componentType {
  return (
    <InputSearchContainer>
      <IconContainer>
        <Icon />
      </IconContainer>
      <Input
        placeholder={placeholder}
        type="text"
        onChange={handledSearchProduct}
      />
    </InputSearchContainer>
  );
}
