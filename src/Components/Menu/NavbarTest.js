import { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//import Badge from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//import Cart from "../Cart";
import { Store } from "../../context/StoreContext";
import { useAuthContext } from "../../context/AuthContext";

export default function NavbarTest() {
  const {
    state: { cart },
  } = useContext(Store);

  const { user, authToken } = useAuthContext();
  console.log("user from navbar", user);
  return (
    <Navbar className="NavBar" expand="sm">
      <Container>
        <HamburgerMenu />
        <Navbar.Brand href="/">
          <img src="/logo.png" height="25px" alt="" />
          <p className="changetext">PharmaHome</p>
        </Navbar.Brand>

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
                Cart
                <span className="position-absolute translate-middle badge rounded-pill bg-danger">
                  {cart.cartItems.length}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </Nav.Link>
              {!authToken && !user ? (
                <>
                  <Nav.Link className="Home" as={Link} to="/SignUp">
                    Sign Up
                  </Nav.Link>
                  <Nav.Link className="Home" as={Link} to="/SignIn">
                    Sign In
                  </Nav.Link>
                </>
              ) : (
                <NavDropdown id="user-dropdown" title="User" menuVariant="dark">
                  <NavDropdown.Item className="Profile" as={Link} to="/Profile">
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item className="SignIn" href="/SignIn">
                    Sign In
                  </NavDropdown.Item>
                  <NavDropdown.Item className="SignOut" href="/SignOut">
                    Sign Out
                  </NavDropdown.Item>

                  {/* <NavDropdown.Divider /> */}
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Row>
      </Container>
    </Navbar>
  );
}
