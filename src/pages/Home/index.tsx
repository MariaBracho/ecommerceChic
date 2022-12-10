import { componentType } from "../../shared/types/GeneralTypes";
import ProductInputSearch from "../../components/ProductInputSearch/index";
import ProductGroup from "../../components/ProductGroup";
import { HomeContainer } from "./style";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useEffect, useState } from "react";
import { fetchProductGroup } from "../../features/product/thunk";

export default function Home(): componentType {
  const { products } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const [productList, setProductList] = useState(products);

  useEffect(() => {
    const promise = dispatch(fetchProductGroup());
    setProductList(products);
    return (): void => {
      promise.abort();
    };
  }, []);

  const filterProduct = ({ target }: any): void => {
    const { value }: { value: string } = target;
    const newProductList = products.filter(({ productName }) => {
      return productName.includes(value);
    });
    setProductList(newProductList);
  };

  console.log("product", productList);
  return (
    <HomeContainer>
      <ProductInputSearch
        handledSearchProduct={filterProduct}
        placeholder="Search a product"
      />
      <ProductGroup products={productList} />
    </HomeContainer>
  );
}
