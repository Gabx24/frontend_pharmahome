export default function FeatureProduct({ product }) {
  return (
    <div className="product" key={product.slug}>
      <a href={/product/${product.slug}}>
        <img
          className="productImg"
          src={https://firebasestorage.googleapis.com/v0/b/pharmahome-2ffc7.appspot.com/o/${product.name}.jpg?alt=media}
          alt={product.name}
        />
      </a>
      <div className="product-info">
        <a href={/product/${product.slug}}>
          <p>{product.name}</p>
        </a>
        <p>
          <strong>€{product.price}</strong>
        </p>
        <button className="">Add to cart</button>
      </div>
    </div>
  );
}
  
