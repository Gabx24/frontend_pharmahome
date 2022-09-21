import { Link } from "react-router-dom";

export default function FeatureProduct({ product }) {
  return (
    <div className="product" key={product.slug}>
      <Link to={`/product/${product.slug}`}>
        <img
          className="productImg"
          src={`https://firebasestorage.googleapis.com/v0/b/pharmahome-2ffc7.appspot.com/o/${product.name}.jpg?alt=media`}
          alt={product.name}
        />
      </Link>
      <div className="product-info">
        <Link to={`/product/${product.slug}`}>
          <p>{product.name}</p>
        </Link>
        <p>
          <strong>€{product.price}</strong>
        </p>
        <button className="">Add to cart</button>
      </div>
    </div>
  );
}
