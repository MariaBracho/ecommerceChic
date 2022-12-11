import { ProductType } from "../models/FetchProduct";
import { BASE_URL } from "../utils/constants/baseURL";

export default async function getProducts(): Promise<ProductType[]> {
  const response = await fetch(`${BASE_URL}/products`);
  const data = (await response.json()) as ProductType[];
  return data;
}
