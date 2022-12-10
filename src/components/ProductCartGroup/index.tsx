import { componentType } from "../../shared/types/GeneralTypes";
import SingleProductCart from "../../components/SingleProductCart";
import { ShoppingCartTypes } from "../../shared/interfaces/FetchProduct";
import { ShoppingCartContainer } from "./style";

export default function ProductCartGroup({
  productList,
}: {
  productList: ShoppingCartTypes[];
}): componentType {
  return (
    <ShoppingCartContainer>
      {productList.map(({ id, productName, price, productImg }) => {
        return (
          <SingleProductCart
            key={id}
            productName={productName}
            price={price}
            productImg={productImg}
          />
        );
      })}
    </ShoppingCartContainer>
  );
}
