import React from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

export default function UpperNav() {
  const navigate = useNavigate();
  const location = useLocation();

  function handleSuggestedUsersClick() {
    navigate("/suggestedUsers");
  }

  function handleSuggestedPostsClick() {
    navigate("/suggestedPosts");
  }

  function handleSettingsClick() {
    navigate("/settings");
  }

  const isActive = (path) => location.pathname === path;

  const activeLinkStyle = {
    borderBottom: "6px solid black",
    paddingBottom: "5px",
  };

  return (
    <Row
      style={{
        height: "10vh",
        backgroundColor: "rgba(255,255,255,0.9)",
      }}
      className="shadow-lg sticky-top d-flex align-items-center d-flex justify-content-around w-100vh"
    >
      <Col
        className="d-flex justify-content-center align-items-center text-center"
        style={isActive("/suggestedUsers") ? activeLinkStyle : {}}
      >
        <p onClick={handleSuggestedUsersClick}>Suggested users</p>
      </Col>

      <Col
        className="d-flex justify-content-center align-items-center"
        style={isActive("/suggestedPosts") ? activeLinkStyle : {}}
      >
        <p onClick={handleSuggestedPostsClick}>Suggeted posts</p>
      </Col>

      <Col
        className="d-flex justify-content-center align-items-center"
        style={isActive("/settings") ? activeLinkStyle : {}}
      >
        <p onClick={handleSettingsClick}>settings</p>
      </Col>
    </Row>
  );
}
