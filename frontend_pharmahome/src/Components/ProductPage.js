import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductPage({ url, products }) {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const findProduct = products.find((element) => element.id == id);
    setProduct(findProduct);
  }, []);

  // useEffect(() => {
  //   axios.get(`${url}products/${id}`).then(({ data }) => {
  //     console.log(data);
  //     return setProduct(data[0]);
  //   });
  // }, []);

  return (
    product && (
      <div>
        {console.log(product)}
        <h1>{product.ProductName}</h1>
        <img src={product.image} />
        <p>{product.description}</p>
      </div>
    )
  );
}
