import { signal } from "@preact/signals-react";
import { useCallback } from "react";
import { searchError } from "../components/SearchPage";


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

  const searchForProducts = useCallback(async (query) => {
    try {
      const response = await fetch(`/products/search/${query}`);

      if (response.status === 404) {
        const data = await response.json();
        searchError.value = data.message;
      }

      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

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

  const getSaleProducts = async () => {
    try {
      const response = await fetch("/products");
      let filteredProducts = null;

      if (response.ok) {
        const data = await response.json();
        if(data) {
          filteredProducts = data.filter(product => product.discount > 0);
        }
        return filteredProducts;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    productsData,
    getAllProducts,
    getProductById,
    searchForProducts,
    getProductDetails,
    getSaleProducts
  };
};

export default useProducts;
