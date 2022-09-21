import React from "react";
import FeatureProduct from "./FeatureProduct";
import ControlledCarousel from "./Carousel";
import data from "../data";
const Home = () => {
  return (
    <main>
      {" "}
      <ControlledCarousel />
      <h1>Featured Products</h1>
      <div className="products">
        {data.products.map((product) => (
          <FeatureProduct product={product} />
        ))}
      </div>
    </main>
  );
};

export default Home;
