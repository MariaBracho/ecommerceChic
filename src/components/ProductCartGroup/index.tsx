import { componentType } from "../../utils/types/GeneralTypes";
import SingleProductCart from "../../components/SingleProductCart";
import { ShoppingCartTypes } from "../../models/FetchProduct";
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
