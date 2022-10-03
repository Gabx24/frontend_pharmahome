//import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Helmet } from "react-helmet";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  const navigateToSignUp = (event) => {
    event.preventDefault();

    // 👇️ navigate to /contacts
    navigate("/SignUp");
  };
  const navigateResetPassword = (event) => {
    event.preventDefault();
    // 👇️ navigate to /ResetPassword
    navigate("/ResetPassword");
  };

  return (
    <Container className="small-container">
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
          <Link onClick={navigateToSignUp}>Sign Up</Link>
        </div>
        <div className="mb-2">
          Forgot password?
          <Link onClick={navigateResetPassword}>Reset password</Link>
        </div>
      </Form>
    </Container>
  );
}
