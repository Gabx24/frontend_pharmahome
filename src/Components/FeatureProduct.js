import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
//import Button from "react-bootstrap/Button";
//import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Rating from "./Rating";

export default function FeatureProduct({ product }) {
  return (
    <Col sm={6} md={4} lg={3} className="mb-3">
      <Card className="product" key={product.id}>
        <Link to={`/product/${product.id}`}>
          <img
            className="card-img-top"
            src={product.image}
            alt={product.ProductName}
          />
        </Link>
        <Card.Body>
          <Link to={`/product/${product.id}`}>
            <Card.Title>{product.ProductName}</Card.Title>
          </Link>

          <Rating rating={product.rating} numReviews={product.numReviews} />
          <Card.Text className="price-products">
            <strong>€{product.price}</strong>
          </Card.Text>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
