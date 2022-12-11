import { ShoppingCartTypes } from "../models/FetchProduct";
import { BASE_URL } from "../utils/constants/baseURL";

export default async function getShoppingCart(): Promise<ShoppingCartTypes[]> {
  const response = await fetch(`${BASE_URL}/shoppingCard`);
  const data = (await response.json()) as ShoppingCartTypes[];
  return data;
}
