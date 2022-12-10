import { BASE_URL } from "../shared/constants/baseURL";
import { ShoppingCartTypes } from "@shared/interfaces/FetchProduct";

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
