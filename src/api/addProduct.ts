import { BASE_URL } from "../utils/constants/baseURL";
import { ShoppingCartTypes } from "../models/FetchProduct";

export default async function addProducts({
  productName,
  price,
  productImg,
}: ShoppingCartTypes): Promise<any> {
  await fetch(`${BASE_URL}/shoppingCard`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productName, price, productImg }),
  });
}
