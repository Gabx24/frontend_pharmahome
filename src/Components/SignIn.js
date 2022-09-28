//import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Helmet } from "react-helmet";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();

  const navigateToSignUp = () => {
    // 👇️ navigate to /contacts
    navigate("/SignUp");
    const navigateResetPassword = () => {
      // 👇️ navigate to /ResetPassword
      navigate("/ResetPassword");
    };
    // This styling will be applied to a <NavLink> when the
    // route that it links to is currently selected.
    let activeStyle = {
      textDecoration: "underline",
    };

    let activeClassName = "underline";

    return (
      <Container className="container-sm">
        <Helmet>
          <title>Sign In</title>
        </Helmet>
        <h1 className="my-2">Sign In</h1>
        <Form>
          <Form.Group className="mb-2" controlled="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" required />
          </Form.Group>
        </Form>
        <Form>
          <Form.Group className="mb-2" controlled="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" required />
          </Form.Group>
          <div className="mb-4">
            <Button type="submit">Sign In</Button>
          </div>
          <div className="mb-2">
            Don't have an account yet?
            <NavLink
              to="/SignUp"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Sign Up
            </NavLink>
          </div>
          <div className="mb-2">
            Forgot password?
            <NavLink
              to="/ResetPassword"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Reset Password
            </NavLink>
          </div>
        </Form>
      </Container>
    );
  };
}
