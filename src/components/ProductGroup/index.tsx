import { componentType } from "../../utils/types/GeneralTypes";
import { ProductGroupContainer } from "./style";
import SingleProduct from "../../components/SingleProduct";
import { ProductType } from "../../models/FetchProduct";

export default function ProductGroup({
  products,
}: {
  products: ProductType[];
}): componentType {
  return (
    <ProductGroupContainer>
      {products.map(({ price, productName, productImg, id }) => {
        return (
          <SingleProduct
            key={id}
            price={price}
            name={productName}
            productImg={productImg}
          />
        );
      })}
    </ProductGroupContainer>
  );
}
