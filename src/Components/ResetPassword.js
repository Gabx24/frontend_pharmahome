import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Helmet } from "react-helmet";
import Button from "react-bootstrap/Button";
//import { Navigate } from "react-router-dom";

export default function ResetPassword() {
  return (
    <Container className="container-sm">
      <Helmet>
        <title>Reset Password</title>
      </Helmet>
      <h1 className="my-3">Sign In</h1>
      <Form>
        <Form.Group className="mb-4" controlled="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required />
        </Form.Group>
      </Form>
      <Form>
        <Form.Group className="mb-4" controlled="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required />
        </Form.Group>
        <div className="mb-4">
          <Button type="submit">Sign In</Button>
        </div>
        <div className="mb-2">Don't have an account yet? Sign-Up</div>
        <div className="mb-2">Forgot password? Reset</div>
      </Form>
    </Container>
  );
}
