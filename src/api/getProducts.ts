import { ProductType } from "../shared/interfaces/FetchProduct";
import { BASE_URL } from "../shared/constants/baseURL";

export default async function getProducts(): Promise<ProductType[]> {
  const response = await fetch(`${BASE_URL}/products`);
  const data = (await response.json()) as ProductType[];
  return data;
}
