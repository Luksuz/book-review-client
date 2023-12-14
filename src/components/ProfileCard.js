import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import PostCard from "./PostCard";
import WritePost from "./WritePost";
import handleFollow from "../api/FollowUserApi";

export default function UserCard({ data }) {
  const [profile, setProfile] = useState(null);
  
  //const [newPost, setNewPost] = useState(null);
  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    setProfile(data);
  }, [data]);

  const handleFollowClick = async () => {
    const status = await handleFollow(profile.id);
    setProfile({
      ...profile,
      followers_count:
        status === 201
          ? profile.followers_count + 1
          : profile.followers_count - 1,
    });
    console.log(profile);
  };

  return (
    <div className="d-flex justify-content-end pe-md-3 w-100">
      {profile && (
        <div className="d-flex flex-column w-100">
          <div className="position-relative mb-5">
            <img
              style={{ height: "200px", width: "100%", objectFit: "cover" }}
              className="img-fluid "
              src="https://images.unsplash.com/photo-1485322551133-3a4c27a9d925?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile"
            />
            <img
              style={{ left: "10%", top: "45%", border: "15px solid white" }}
              height={"25%"}
              width={"25%"}
              className="img-fluid rounded-circle position-absolute"
              src="/user.png"
              alt="User"
            />
          </div>

          <div className="mt-5">
            <div className="mt-3">
              <div className="d-flex justify-content-between mx-2">
              <p style={{fontSize:"3rem"}}>{profile.username}</p>
              {profile.id !== userId && (
                <Button variant="success" onClick={handleFollowClick} className="d-flex h-50 align-items-center justify-content-center">
                  <p className="fs-s text-center">Follow</p>
                  <img className="img-fluid" src={"/follow.png"} height={"50%"} width={"50%"} alt="follow"/>
                </Button>
            )}
              </div>
              <p className="ms-2" style={{fontSize:"3rem"}}>{profile.followers_count} followers</p>
            </div>
            
            {profile.id === userId && <WritePost />}
            {profile.posts &&
              profile.posts.map((post) => (
                <Row
                  key={post.id + 1000}
                  className="justify-content-center align-items-center py-4"
                >
                  <PostCard data={post} />
                </Row>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
