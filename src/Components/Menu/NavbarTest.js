import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import HamburgerMenu from "./HamburgerMenu"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function NavbarTest() {
  return (
    <Navbar className = "NavBar"  expand="lg">
      <Container>
        <HamburgerMenu />
         <Navbar.Brand href="#home"><img  src="/logo.png" height = "40px" alt="" />
         <p className='changetext'>PharmaHome</p></Navbar.Brand> 
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"/>
            <Button variant="outline-success">Search</Button>
            </Form>
        <Row  className="col-">
          <Navbar.Collapse id="navbar-dark-example" className="justify-content-end">
            <Nav>
            
              <Nav.Link className= "Home" as={Link} to="/">Home</Nav.Link>
              
              <Nav.Link  className= "Cart" as={Link} to="/Cart">Cart</Nav.Link>
              <NavDropdown
                id="user-dropdown"
                title="User"
                menuVariant="dark"
              >
                <NavDropdown.Item ClassName = "DashBoard" as={Link} to="/Dashboard">Dashboard</NavDropdown.Item>
                <NavDropdown.Item ClassName = "Profile" as={Link} to="/Profile">Profile</NavDropdown.Item>
                <NavDropdown.Item ClassName ="Order History" href="#action/3.2">
                  Order History
                </NavDropdown.Item>
                <NavDropdown.Item ClassName = "SignIn" href="#action/3.3">Sign In</NavDropdown.Item>
                <NavDropdown.Item ClassName = "SignOut" href="#action/3.4">Sign Out</NavDropdown.Item>
               
                {/* <NavDropdown.Divider /> */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Row>
        
      </Container>
    </Navbar>
  );
}