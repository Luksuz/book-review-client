import React, { useState } from "react";
import { Col, Button, Offcanvas } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import WriteComment from "./WriteComment";
import handleLike from "../api/LikeApi";
import { useDispatch } from "react-redux";
import { /*SendComment*/ deleteComment } from "../api/CommentApi";
import { /*changeComment*/ removeComment } from "../features/posts/postSlice";
import { deletePost } from "../api/PostApi";
import ".././styles/postCard.css";

export default function PostCard({ data }) {
  //eslint-disable-next-line
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

  //eslint-disable-next-line
  function handleRemoveComment(comment_id) {
    dispatch(removeComment({ post: data.id, commentId: comment_id }));
    deleteComment(comment_id);
  }

  //eslint-disable-next-line
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
    //eslint-disable-next-line
    const deletedPost = await deletePost(data.id);
    //dispatch(removePost(post.id));
  }

  async function handleLikeClick() {
    const status = await handleLike(data.id, userId);
    console.log(status);
    status === 201 ? setLikes(likes + 1) : setLikes(likes - 1);
  }

  return (
    <Col className="border border-3 mx-4 p-3 bg-light rounded-5 main-shadow position-relative">
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <img
            className="img-fluid rounded-circle"
            src="/user.png"
            alt="User"
            height={"10%"}
            width={"10%"}
          />
          <h1 style={{ fontSize: "2rem" }} className="mx-5">
            {data.author}
          </h1>
        </div>


      </div>
      <div className="d-flex justify-content-between">
        <h2
          className="text-secondary py-3 fs-3 fst-italic"
          onClick={handleProfileClick}
        >
          {data.title}
        </h2>
      </div>

      <div style={{ height: "30%", overflowY: "auto" }}>
        <h3
          className="px-2 text-break fs-3 lh-base"
        >
          {data.content}
        </h3>
      </div>
      

      {userId === data.author && (
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
          <h1 style={{ fontSize: "2rem" }} className="text-center fst-italic">
            {data.author}/{data.title}
          </h1>
          <hr />
          {data.comments &&
            data.comments.map((comment) => (
              <div className="d-flex flex-column justify-content-between mb-1">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <img
                    className="img-fluid rounded-circle"
                    src="/user.png"
                    alt="User"
                    height={"8%"}
                    width={"8%"}
                  />
                  <p style={{ fontSize: "2rem" }}>{comment.author}</p>
                </div>
                <div>
                  <p className="text-wrap ms-4 fs-2 lh-base">
                    {comment.content}
                  </p>
                </div>
                <hr className="w-50" />
              </div>
            ))}
          <div className="d-flex mb-auto p-2 shadow-lg rounded-4">
            <WriteComment postId={data.id} />
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <div className="d-flex justify-content-between bottom-0 start-0">
        <div className="d-flex ">
        <a href="#" onClick={handleLikeClick}
>
          <img
            src={likes > data.likes ? "/red-heart.png" : "/white-heart.png"}
            height={"60%"}
            alt="Like"
          />
          </a>
        <p className="fs-3 ms-3">{likes}</p>
        </div>
        

        <a onClick={handleCommentShow}>
          <p className="fs-5">
          see all comments ({data.comments && data.comments.length})
          </p>
        </a>
      </div>
    </Col>
  );
}
