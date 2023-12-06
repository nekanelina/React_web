import { signal } from "@preact/signals-react";

const productsData = signal([]);

const useProducts = () => {
  const getAllProducts = async () => {
    try {
      const response = await fetch("/products");

      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getProductById = async (productId) => {
    try {
      const response = await fetch(`/products/${productId}`);

      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  // Get product details for each product in the order
  const getProductDetails = async (orders) => {
    try {
      const details = await Promise.all(
        orders.flatMap((order) =>
          order.products.map((product) => getProductById(product.productId))
        )
      );
      return details;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    productsData,
    getAllProducts,
    getProductById,
    getProductDetails,
  };
};

export default useProducts;
