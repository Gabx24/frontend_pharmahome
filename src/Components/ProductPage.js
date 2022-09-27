import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
//import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Rating from "./Rating";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function ProductPage({ url, products }) {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const findProduct = products.find((element) => element.id === +id);
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
        <Row>
          {console.log(product)}
          <Col md={6}>
            {" "}
            <img
              className="img-large"
              src={product.image}
              alt={product.ProductName}
            />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h1 className="title-productPage">{product.ProductName}</h1>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  rating={product.rating}
                  numReviews={product.numReviews}
                ></Rating>
              </ListGroup.Item>
              <ListGroup.Item>
                <p className="product-description">Price: €{product.price}</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p className="product-description">Description:</p>
                <p className="product-description">{product.description}</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col className="product-description">Price:</Col>
                      <Col className="product-description">
                        €{product.price}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col className="product-description">Status:</Col>
                      <Col className="product-description">
                        {product.countInStock > 0 ? (
                          <Badge bg="success">In stock</Badge>
                        ) : (
                          <Badge bg="danger">Unavailable</Badge>
                        )}
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <div className="d-grid">
                        <Button variant="primary">Add to Cart</Button>
                      </div>
                    </ListGroup.Item>
                  )}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    )
  );
}
