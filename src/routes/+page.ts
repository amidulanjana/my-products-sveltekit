import type { PageLoad } from ".svelte-kit/types/src/routes/$types";
import { error } from '@sveltejs/kit';

export const ssr = false;

export const load: PageLoad = async ({ fetch }) => {
  const res = await fetch("https://fakestoreapi.com/products")
  const products = await res.json();

  // if (products.length > 0) {
  //   throw error(404, {
  //     message: 'Not found!'
  //   });
  // }

  return {
    products
  };
}