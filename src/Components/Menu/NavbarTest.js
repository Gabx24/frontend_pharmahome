import { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Cart from "../Cart";
import { Store } from "../../context/StoreContext";

export default function NavbarTest() {
  const {
    state: { cart },
  } = useContext(Store);
  return (
    <Navbar className="NavBar" expand="lg">
      <Container>
        <HamburgerMenu />
        <Navbar.Brand href="/">
          <img src="/logo.png" height="30px" alt="" />
          <p className="changetext">PharmaHome</p>
        </Navbar.Brand>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Row className="col-">
          <Navbar.Collapse
            id="navbar-dark-example"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link className="Home" as={Link} to="/">
                Home
              </Nav.Link>

              <Nav.Link className="Cart" as={Link} to="/Cart">
                <Badge pill bg="danger">
                  Cart: {cart.cartItems.length}
                </Badge>
              </Nav.Link>
              <NavDropdown id="user-dropdown" title="User" menuVariant="dark">
                <NavDropdown.Item
                  className="DashBoard"
                  as={Link}
                  to="/Dashboard"
                >
                  Dashboard
                </NavDropdown.Item>
                <NavDropdown.Item className="Profile" as={Link} to="/Profile">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="Order History"
                  href="/OrderHistory"
                >
                  Order History
                </NavDropdown.Item>
                <NavDropdown.Item className="SignIn" href="/SignIn">
                  Sign In
                </NavDropdown.Item>
                <NavDropdown.Item className="SignOut" href="/SignOut">
                  Sign Out
                </NavDropdown.Item>

                {/* <NavDropdown.Divider /> */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Row>
      </Container>
    </Navbar>
  );
}
