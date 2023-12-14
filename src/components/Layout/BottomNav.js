import React from "react";
import { useNavigate } from "react-router-dom";

export default function BottomNav() {
  const navigate = useNavigate();

  function handleFeedClick() {
    navigate("/feed");
  }

  function handleSuggestedClick() {
    navigate("/suggestedPosts");
  }

  function handleProfileClick() {
    navigate("/profile");
  }

  return (
    <div
      style={{backgroundColor: "rgba(255,255,255,0.9)" }}
      className="fixed-bottom bg-light shadow d-flex align-items-center p-2"
    >
      <div className="d-flex justify-content-around align-items-center w-100">
        <div className="d-flex flex-column">
          <img className="" onClick={handleFeedClick} src="/feed.png" alt="Feed" />
          <p>feed</p>
        </div>

        <div className="d-flex flex-column">
          <img onClick={handleSuggestedClick} src="/rating.png" alt="Rating" />
          <p>suggested</p>
        </div>

        <div className="d-flex flex-column">
          <img onClick={handleProfileClick} src="/profile.png" alt="Profile" />
          <p>profile</p>
        </div>
      </div>
    </div>
  );
}
