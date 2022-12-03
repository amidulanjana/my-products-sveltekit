import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, }) => {
  const res = await fetch("https://fakestoreapi.com/products")
  const products = await res.json();
  return {
    products
  };
}