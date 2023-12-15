import React from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

export default function UpperNav() {
  const navigate = useNavigate();
  const location = useLocation();

  function handleFeedClick() {
    navigate("/feed");
  }

  function handleSuggestedClick() {
    navigate("/suggestedPosts");
  }

  function handleProfileClick() {
    navigate("/profile");
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
      className="shadow-lg sticky-top d-flex align-items-center d-flex justify-content-around w-100"
    >
      <Col
        className="d-flex justify-content-center align-items-center text-center"
        style={isActive("/feed") ? activeLinkStyle : {}}
      >
        <p onClick={handleFeedClick}>Suggested posts</p>
      </Col>

      <Col
        className="d-flex justify-content-center align-items-center"
        style={isActive("/suggestedPosts") ? activeLinkStyle : {}}
      >
        <p onClick={handleSuggestedClick}>Suggeted posts</p>
      </Col>

      <Col
        className="d-flex justify-content-center align-items-center"
        style={isActive("/profile") ? activeLinkStyle : {}}
      >
        <p onClick={handleProfileClick}>settings</p>
      </Col>
    </Row>
  );
}
