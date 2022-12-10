import { ShoppingCartTypes } from "../../shared/interfaces/FetchProduct";
import { componentType } from "../../shared/types/GeneralTypes";
import {
  ProductCartContainer,
  ProductNameAndPriceContainer,
  ProductName,
  Section,
  Price,
  ProductImg,
  AmountContainer,
  Button,
  AddIcon,
  LessIcon,
  Number,
} from "./style";

export default function SingleProductCart({
  productImg,
  price,
  productName,
}: ShoppingCartTypes): componentType {
  return (
    <ProductCartContainer>
      <ProductImg src={productImg} />
      <Section>
        <ProductNameAndPriceContainer>
          <ProductName>{productName}</ProductName>
          <Price>{price}</Price>
        </ProductNameAndPriceContainer>
        <AmountContainer>
          <Button>
            <AddIcon />
          </Button>
          <Number>1</Number>
          <Button>
            <LessIcon />
          </Button>
        </AmountContainer>
      </Section>
    </ProductCartContainer>
  );
}
