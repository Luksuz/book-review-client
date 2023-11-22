import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import handleRegistration from "./api/RegistrationApi";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Registration() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    handleRegistration(
      username,
      email,
      password,
      passwordConfirmation,
      newsletter
    ).then((data) => {
      console.log(data);
      if (data.status === 201) {
        navigate("/login");
      }
      console.log(data);
    });
  }

  return (
    <div className="login-container">
      <Form
        style={{ backgroundColor: "#FFFCF9" }}
        className="fs-1 w-75 h-50 bordered p-3 bg-light rounded-5 shadow-inset"
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            className="fs-1"
            type="username"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="fs-1"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="fs-1"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            className="fs-1"
            type="password"
            placeholder="Password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="I want to recieve latest news and feature updates."
            value={newsletter}
            onChange={(e) => setNewsletter(e.target.value)}
          />
        </Form.Group>
        <Button className="w-100 fs-1" variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}
