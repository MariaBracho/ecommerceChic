import { ShoppingCartTypes } from "../shared/interfaces/FetchProduct";
import { BASE_URL } from "../shared/constants/baseURL";

export default async function getShoppingCart(): Promise<ShoppingCartTypes[]> {
  const response = await fetch(`${BASE_URL}/shoppingCard`);
  const data = (await response.json()) as ShoppingCartTypes[];
  return data;
}
