export default function FeatureProduct({ product }) {
  return (
    <div className="product" key={product.slug}>
      <a href={`/product/${product.slug}`}>
        <img className="productImg" src={product.image} alt={product.name} />
      </a>
      <div className="product-info">
        <a href={`/product/${product.slug}`}>
          <p>{product.name}</p>
        </a>
        <p>
          <strong>€{product.price}</strong>
        </p>
        <button>Add to cart</button>
      </div>
    </div>
  );
}
