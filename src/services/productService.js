import { products } from "../data/products";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const getProducts = async (categoryId) => {
  await delay(600);
  if (!categoryId) return products;
  return products.filter((p) => p.category === categoryId);
};

export const getProductById = async (itemId) => {
  await delay(600);
  return products.find((p) => p.id === itemId);
};
