import { getProducts } from "./getAllProductsController";

export const getTopProducts = async () => {
     const products = await getProducts();
     const topProducts = products.sort((a, b) => b.Rating - a.Rating).slice(0, 4);
     return topProducts.reverse(); //return the top products in descending order
}