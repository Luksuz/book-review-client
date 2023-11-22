
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import handleLogin from "./api/LoginApi";
import { useNavigate } from "react-router-dom";
import "./Login.css";


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    handleLogin(
      username,
      password
    ).then((data) => {
        console.log(data);
        localStorage.setItem("username", data.username);
        localStorage.setItem("user_id", data.user_id);
        localStorage.setItem("token", data.token);
        if (data.token) {
            navigate("/feed");
        }
    });
  }

  return (
    <div className="login-container">
      <Form style={{backgroundColor: "#FFFCF9"}} className=" fs-1 w-75 h-25 bordered p-3 bg-light rounded-5 shadow-inset" onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
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

        <Form.Group className="mt-5" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="fs-1"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button className="w-100 fs-1" variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}
