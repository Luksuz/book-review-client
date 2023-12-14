
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

  const handleDemoClick = () => {
    localStorage.setItem("username", "root");
    localStorage.setItem("user_id", 1);
    localStorage.setItem("token", "7a46228c8929e7ed4f32693bf979b02fdaa0577e");
    navigate("/feed");
  };

  return (
    <>
    <div className="login-container d-flex flex-column">
      <Form style={{backgroundColor: "#FFFCF9"}} className="fs-1 bordered p-2 m-2 bg-light rounded-5 shadow-inset" onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            className="fs-3"
            type="username"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="fs-3"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button className="w-100 fs-3" variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <Button onClick={handleDemoClick}>
     try Demo
   </Button>
    </div>
     
   </>
  );
}
