import { componentType } from "../../utils/types/GeneralTypes";
import ProductCartGroup from "../../components/ProductCartGroup";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useEffect } from "react";
import { fetchShoppingCart } from "../../Redux/product/thunk";

export default function ShoppingCart(): componentType {
  const { cartList } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const promise = dispatch(fetchShoppingCart());
    return (): void => {
      promise.abort();
    };
  }, []);
  return <ProductCartGroup productList={cartList} />;
}
