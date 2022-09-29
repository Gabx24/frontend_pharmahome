import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Helmet } from "react-helmet";

export default function ResetPassword() {
  const triggerResetEmail = () => {
    console.log("Password reset email sent");
  };
  return (
    <Container className="container-sm">
      <Helmet>
        <title>Reset Password</title>
      </Helmet>
      <h1 className="my-3">Reset your password</h1>
      <Form>
        <Form.Group className="mb-4" controlled="email">
          <Form.Label>
            Please enter your username or email address. You will receive a link
            to create a new password via email.{" "}
          </Form.Label>
          <Form.Control type="email" required />
        </Form.Group>
        <div>
          <button
            className="resetBtn"
            type="button"
            onClick={triggerResetEmail}
          >
            Get new password
          </button>
        </div>
      </Form>
    </Container>
  );
}
