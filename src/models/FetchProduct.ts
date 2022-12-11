import { FetchStatus } from "../utils/enums/fetchStatus";

export interface ProductType {
  productName: string;
  price: string | number;
  productImg: string;
  id?: string | number;
}

export interface ShoppingCartTypes extends ProductType {
  quantity?: number;
}

export interface InitialStateTypes {
  status: FetchStatus;
  products: ProductType[];
  cartList: ShoppingCartTypes[];
}
