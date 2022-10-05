import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Helmet } from "react-helmet";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
//import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { registerUser } from "../utils/auth";

export default function SignUp() {
  const { user, setUser, setAuthToken } = useAuthContext();

  const navigate = useNavigate();
  const navigateToSignIn = (event) => {
    // event.preventDefault();
    // // 👇️ navigate to /contacts
    // navigate("/SignIn");
  };
  const [registerData, setRegisterData] = useState({
    email: "",
    name: "",
    first_name: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isUserRegistered = await registerUser(registerData);

    if (isUserRegistered.token) {
      setAuthToken(isUserRegistered.token);
      navigate("/Home", { replace: true });
    }
  };

  const handleChange = (e) => {
    setRegisterData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(registerData);
  return (
    <Container className="small-container">
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <h1 className="my-2">Sign Up</h1>
      <Form>
        <Form.Group onChange={handleChange} className="mb-2" controlled="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="email" required name="name" />
        </Form.Group>
      </Form>
      <Form>
        <Form.Group onChange={handleChange} className="mb-2" controlled="name">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="email" required name="first_name" />
        </Form.Group>
      </Form>
      <Form>
        <Form.Group onChange={handleChange} className="mb-2" controlled="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required name="email" />
        </Form.Group>
      </Form>
      <Form>
        <Form.Group
          onChange={handleChange}
          className="mb-2"
          controlled="password"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required name="password" />
        </Form.Group>
        <div className="mb-4">
          <Button type="submit" onClick={handleSubmit}>
            Sign Up
          </Button>
        </div>
        <div className="mb-2">
          Already a user?
          <Link onClick={navigateToSignIn}>Sign In</Link>
        </div>
      </Form>
    </Container>
  );
}
