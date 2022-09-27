import React from "react";
import FeatureProduct from "./FeatureProduct";
import ControlledCarousel from "./Carousel";

const Home = ({ products }) => {
  return (
    <main>
      <ControlledCarousel />
      <h1 className="title-text-home">Selected for you:</h1>
      <div className="products">
        {products.map((product) => (
          <FeatureProduct product={product} />
        ))}
      </div>
    </main>
  );
};

export default Home;
