import { Link } from "react-router-dom";

export default function FeatureProduct({ product }) {
  return (
    <div className="product" key={product.id}>
      <Link to={`/product/${product.id}`}>
        <img
          className="productImg"
          src={product.image}
          alt={product.ProductName}
        />
      </Link>
      <div className="product-info">
        <Link to={`/product/${product.id}`}>
          <p>{product.name}</p>
        </Link>
        <p>
          <p>{product.ProductName}</p>
          <strong>€{product.price}</strong>
        </p>
        <button className="">Add to cart</button>
      </div>
    </div>
  );
}
