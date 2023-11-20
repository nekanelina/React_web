import React from "react";
import "./MostPopular.css";
import MostPopularItem from "./MostPopularItem/MostPopularItem";
import { products } from "../../../models/data";

const MostPopular = () => {
  return (
    <section className="most-popular">
      <a className="link-most-popular" href="#fake">
        <div className="most-popular-title">
          <p>Most Popular Items On The Marketplace</p>
        </div>
        <div className="most-popular-container featured-center">
          {products.eStorageSolutions.map((product) => {
            return <MostPopularItem {...product} key={product.id} />;
          })}
        </div>
      </a>
    </section>
  );
};

export default MostPopular;
