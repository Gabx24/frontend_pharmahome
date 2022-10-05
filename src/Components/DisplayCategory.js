import FeatureProduct from "./FeatureProduct";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DisplayCategory = ({ products }) => {
  const { id } = useParams();

  const filteredProducts = products?.filter(
    (product) => id == product.CategoryID
  );

  return (
    <main>
      <h1 className="title-text-home">
        Displaying all under category: {console.log(filteredProducts)}
      </h1>
      <div className="products">
        {filteredProducts?.map((product) => (
          <FeatureProduct key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default DisplayCategory;
