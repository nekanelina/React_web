import React from "react";
import "./ProductCard.css";
import ProductCardItem from "./ProductCardItem";
import { products } from "../../models/data";

const ProductCard = () => {
  return (
    <section className="product-card">
      <div className="product-card-container featured-center">
        {products.solarPanels.map((product) => {
          return <ProductCardItem {...product} key={product.id} />;
        })}
      </div>
    </section>
  );
};

export default ProductCard;
