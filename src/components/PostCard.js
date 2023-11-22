import React, { useState } from "react";
import { Col, Button, Offcanvas, InputGroup, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import WriteComment from "./WriteComment";
import Skeleton from "react-loading-skeleton";
import handleLike from "../api/LikeApi";
import { useDispatch } from "react-redux";
import { SendComment, deleteComment } from "../api/CommentApi";
import { changeComment, removeComment } from "../features/posts/postSlice";
import { deletePost } from "../api/PostApi";
import ".././styles/postCard.css";

export default function PostCard({ data }) {
  const [changeComment, setChangeComment] = useState(false);
  const [show, setShow] = useState(false);
  const [likes, setLikes] = useState(data.likes);
  const userId = localStorage.getItem("user_id");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCommentClose = () => setShow(false);
  const handleCommentShow = () => setShow(true);

  const handleProfileClick = () => {
    navigate("/" + data.author + "/profile");
  };

  function handleRemoveComment(comment_id) {
    dispatch(removeComment({ post: data.id, commentId: comment_id }));
    deleteComment(comment_id);
  }

  function handleCommentChange(comment_id, title, content) {
    dispatch(
      changeComment({
        post: data.id,
        commentId: comment_id,
        title: title,
        content: content,
      })
    );
  }

  async function handlePostDelete() {
    const deletedPost = await deletePost(data.id);
    //dispatch(removePost(post.id));
  }

  async function handleLikeClick() {
    const status = await handleLike(data.id, userId);
    console.log(status);
    status === 201 ? setLikes(likes + 1) : setLikes(likes - 1);
  }

  return (
    <Col className="border border-3 mx-5 p-4 bg-light rounded-5 main-shadow h-100 position-relative">
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <img
            className="img-fluid rounded-circle"
            src="/user.png"
            alt="User"
            height={"12%"}
            width={"12%"}
          />
          <h1 style={{ fontSize: "3rem" }} className="mx-5">
            {data.author}
          </h1>
        </div>
        <div className="align-items-center fs-5">
          <p>
            Posted:{" "}
            {data.created_at ? (
              new Date(data.created_at).toLocaleString()
            ) : (
              <Skeleton />
            )}
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <h2
          className="text-secondary py-3 fs-1 fst-italic"
          onClick={handleProfileClick}
        >
          {data.title}
        </h2>
      </div>
      <h3
        style={{ height: "50%", overflowY: "auto" }}
        className="px-2 text-break fs-1 lh-base"
      >
        {data.content}
      </h3>

      {userId == data.author && (
        <Button variant="danger" onClick={handlePostDelete}>
          Delete
        </Button>
      )}

      <Offcanvas
        show={show}
        onHide={handleCommentClose}
        placement="bottom"
        name="bottom"
        className="h-75 rounded-top-5"
      >

        <Offcanvas.Body>
          <h1 style={{fontSize: "3rem"}} className="text-center fst-italic">{data.author}/{data.title}</h1>
          <hr />
          {data.comments &&
            data.comments.map((comment) => (
              <div className="d-flex flex-column justify-content-between mb-4">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <img
                    className="img-fluid rounded-circle"
                    src="/user.png"
                    alt="User"
                    height={"10%"}
                    width={"10%"}
                  />
                  <p style={{fontSize: "3rem"}}>{comment.author}</p>
                </div>
                <div>
                  <p className="text-wrap ms-4 fs-1 lh-base">{comment.content}</p>
                </div>
                <hr className="w-50"/>
              </div>
            ))}
            <div className="d-flex fixed-bottom p-2 shadow-lg rounded-4">
              <WriteComment postId={data.id}/>
            </div>

        </Offcanvas.Body>
      </Offcanvas>

      <div className="d-flex justify-content-center position-absolute bottom-0 start-0 p-3">
          <a className="ms-2 me-2" href="#" onClick={handleLikeClick}>
            <img
              src={likes > data.likes ? "/red-heart.png" : "/white-heart.png"}
              height={"100%"}
            />
          </a>
          <p className="ms-5 fs-1">{likes}</p>
       
          <a className="ms-5 fs-2" onClick={handleCommentShow}>
            see all comments ({data.comments && data.comments.length})
          </a>
        </div>
    </Col>
  );
}
