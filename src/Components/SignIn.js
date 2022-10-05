//import { Link } from "react-router-dom";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Helmet } from "react-helmet";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { loginUser } from "../utils/auth";

export default function SignIn() {
  const { user, setUser, setAuthToken } = useAuthContext();

  const navigate = useNavigate();
  // const navigateToSignIn = (event) => {
  //   // event.preventDefault();
  //   // // 👇️ navigate to /contacts
  //   // navigate("/SignIn");
  // };
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isUserAuthenticated = await loginUser(loginData);

    if (isUserAuthenticated.token) {
      setAuthToken(isUserAuthenticated.token);
      navigate("/Home", { replace: true });
    }
  };

  const handleChange = (e) => {
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // const navigate = useNavigate();
  // const navigateToSignUp = (event) => {
  //   event.preventDefault();

  //   // 👇️ navigate to /contacts
  //   navigate("/SignUp");
  // };
  // const navigateResetPassword = (event) => {
  //   event.preventDefault();
  //   // 👇️ navigate to /ResetPassword
  //   navigate("/ResetPassword");
  // };

  return (
    <Container className="small-container">
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <h1 className="my-2">Sign In</h1>
      <Form>
        <Form.Group className="mb-2" controlled="email" onChange={handleChange}>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required name="email" />
        </Form.Group>
      </Form>
      <Form>
        <Form.Group
          className="mb-2"
          controlled="password"
          onChange={handleChange}
        >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required name="password" />
        </Form.Group>
        <div className="mb-4">
          <Button type="submit" onClick={handleSubmit}>
            Sign In
          </Button>
        </div>
        <div className="mb-2">
          Don't have an account yet?
          {/* <Link onClick={navigateToSignUp}>Sign Up</Link> */}
        </div>
        <div className="mb-2">
          Forgot password?
          {/* <Link onClick={navigateResetPassword}>Reset password</Link> */}
        </div>
      </Form>
    </Container>
  );
}
