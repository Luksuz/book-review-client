import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Col } from "react-bootstrap";

export default function SideNav() {
  const navigate = useNavigate();
  const location = useLocation();

  function handleFeedClick() {
    navigate("/feed");
  }

  function handleSuggestedPostsClick() {
    navigate("/suggestedPosts");
  }

  function handleSuggestedUsersClick() { 
    navigate("/suggestedUsers");
 }

  function handleProfileClick() {
    navigate("/profile");
  }

  function handleSettingsClick() {
    navigate("/settings");
  }

  const isActive = (path) => location.pathname === path;

  const activeLinkStyle = {
    end: "0",
    borderRight: "6px solid black", // Add this line
    paddingRight: "10px", // Adjust padding as needed
  };

  return (
    <Col
      style={{
        height: "100vh",
        backgroundColor: "rgba(255,255,255,0.9)",
        zIndex: 1000,
      }}
      className="shadow-lg d-flex position-fixed sticky-top flex-column justify-content-around align-items-center rounded-bottom-5 w-25"
    >
      <div onClick={handleFeedClick} className="w-100" style={isActive("/feed") ? activeLinkStyle : {}}>
        <p className="fs-2 text-center">
          Feed
        </p>
      </div>

      <div onClick={handleProfileClick} className="w-100" style={isActive("/profile") ? activeLinkStyle : {}}>
        <p className="fs-2 text-center">
          Profile
        </p>
      </div>

      <div onClick={handleSuggestedPostsClick} className="w-100" style={isActive("/suggestedPosts") ? activeLinkStyle : {}}>
        <p
          className="fs-2 text-center"
        >
          Suggested Posts
        </p>
      </div>

      

      <div onClick={handleSuggestedUsersClick} className="w-100" style={isActive("/suggestedUsers") ? activeLinkStyle : {}}>
        <p className="fs-2 text-center">
          Suggested Users
        </p>
      </div>

      <div onClick={handleSettingsClick} className="w-100" style={isActive("/settings") ? activeLinkStyle : {}}>
        <p className="fs-2 text-center">
          Settings
        </p>
      </div>

    </Col>
  );
}
