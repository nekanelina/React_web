// ProductPage.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { allProducts } from "../../models/newData";
import product from "../../models/dataForSale";
import "./ProductPage.css";

const ProductPage = () => {
  const [whatProduct, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    // Find the product with the specified id from the products data
    const foundProduct = allProducts.find((item) => item.id === id);

    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      // Handle the case when the product with the specified id is not found
      console.error(`Product with id ${id} not found`);
    }
  }, [id]);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(isNaN(value) ? 1 : value);
  };

  const handleAddToCart = () => {
    // Implement your logic to add the product to the cart with the specified quantity
    console.log(`Added ${quantity} items of product with id ${id} to the cart`);
  };

  if (!whatProduct) {
    // Add loading state or error handling here
    return <p>Loading...</p>;
  }

  return (
    <div className="product-page">
      <div className="product-image">
        <img
          src={require(`../../images/products/${whatProduct.image}`)}
          alt={whatProduct.name}
        />
      </div>
      <div className="product-details">
        <h1 className="product-title">{whatProduct.productName}</h1>
        <p className="product-description">{whatProduct.description}</p>
        <p className="product-page-price">{whatProduct.cost}</p>
        <div className="quantity-section">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
          />
        </div>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>

        {/* Product Specifications */}
        <div className="specifications-section">
          <h2>Product Specifications</h2>
          <ul>
            <li>Manufacturer: {whatProduct.manufacturer}</li>
            <li>Country of origin: {whatProduct.country}</li>

            <li>Material: {whatProduct.material}</li>
            <li>Size: {whatProduct.size}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
