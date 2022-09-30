import { useContext } from "react";
import { Store } from "../context/StoreContext";
import { Helmet } from "react-helmet";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import { Link, useNavigate } from "react-router-dom";
import MessageBox from "./MessageBox";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Cart() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const updateCartHandler = async (product, type) => {
    try {
      /*     const {
        data: [productInDB],
      } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/products/${product.id}`
      ); */
      return ctxDispatch({ type, payload: product.id });
    } catch (error) {
      console.error(error);
    }
  };
  const checkoutHandler = () => {
    navigate("/Checkout");
  };

  return (
    <div>
      <Helmet>
        <title>Shopping Cart</title>
      </Helmet>
      <h1>Shopping Cart</h1>
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <MessageBox>
              Cart is empty. <Link to="/">Go shopping with us</Link>
            </MessageBox>
          ) : (
            <ListGroup>
              {cartItems.map((product) => (
                <ListGroup.Item key={product.id}>
                  <Row className="align-items-center">
                    <Col md={2}>
                      <Link to={`/product/${product.id}`}>
                        <img
                          src={product.image}
                          alt={product.ProductName}
                          className="img-fluid rounded img-thumbnail"
                        />{" "}
                      </Link>
                    </Col>
                    <Col md={2}>{product.ProductName}</Col>
                    <Col md={3}>
                      <Button
                        onClick={() =>
                          updateCartHandler(product, "DECREASE_PRODUCT")
                        }
                        variant="light"
                      >
                        <i className="fas fa-minus-circle"></i>
                      </Button>{" "}
                      <span>{product.quantity}</span>{" "}
                      <Button
                        onClick={() =>
                          updateCartHandler(product, "INCREASE_PRODUCT")
                        }
                        variant="light"
                      >
                        <i className="fas fa-plus-circle"></i>
                      </Button>
                    </Col>
                    <Col md={3}>€{product.price}</Col>
                    <Col md={2}>
                      <Button
                        onClick={() =>
                          updateCartHandler(product, "REMOVE_PRODUCT")
                        }
                        variant="light"
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3 className="cart-bd-text">
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{" "}
                    items) : €
                    {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                  </h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid">
                    <Button
                      type="button"
                      variant="primary"
                      onClick={checkoutHandler}
                      disabled={cartItems.length === 0}
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
//}
