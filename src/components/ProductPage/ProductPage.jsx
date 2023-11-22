// ProductPage.jsx
import { products } from "../../models/data";
import React, { useState } from "react";
import "./ProductPage.css";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(isNaN(value) ? 1 : value);
  };

  const handleAddToCart = () => {
    // Implement your logic to add the product to the cart with the specified quantity
    console.log(`Added ${quantity} items to the cart`);
  };

  // Replace 'dynamic-image.jpg' with the dynamic source for your image
  const solarPanel = products.solarPanels[0];

  return (
    <div className="product-page">
      <div className="product-image">
        <img
          src={require(`../../images/products/solar_panels/${solarPanel.image}`)}
        />
      </div>
      <div className="product-details">
        <h1 className="product-title">{solarPanel.name}</h1>
        <p className="product-description">{solarPanel.description}</p>
        <p className="product-page-price">{solarPanel.cost}</p>
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
            <li>Material: {solarPanel.material}</li>
            <li>Size: {solarPanel.size}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
