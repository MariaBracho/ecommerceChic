import { componentType } from "@shared/types/GeneralTypes";
import {
  SingleProductContainer,
  ProductImg,
  PriceAndNameContainer,
  Price,
  ProductName,
  AddIconContainer,
  DescriptionContainer,
  AddIcon,
} from "./style";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { addProduct } from "../../features/product/thunk";
import { ShoppingCartTypes } from "../../shared/interfaces/FetchProduct";

interface SingleProductProps {
  name: string;
  price: string | number;
  productImg: string;
}

export default function SingleProduct({
  name,
  price,
  productImg,
}: SingleProductProps): componentType {
  const dispatch = useAppDispatch();

  const handledShoppingCart = (product: ShoppingCartTypes): void => {
    dispatch(addProduct(product)).catch(console.error);
  };

  return (
    <SingleProductContainer>
      <ProductImg src={productImg} />

      <DescriptionContainer>
        <PriceAndNameContainer>
          <ProductName>{name}</ProductName>
          <Price>${price}</Price>
        </PriceAndNameContainer>

        <AddIconContainer>
          <AddIcon
            onClick={(): void =>
              handledShoppingCart({ productName: name, price, productImg })
            }
          />
        </AddIconContainer>
      </DescriptionContainer>
    </SingleProductContainer>
  );
}
