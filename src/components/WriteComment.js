import { useState } from "react";
import InputGroup from "react-bootstrap/esm/InputGroup";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import {SendComment} from "../api/CommentApi";
import { useDispatch } from "react-redux";
import { addComment } from "../features/posts/postSlice";

export default function WriteComment({ postId }) {
  const [comment, setComment] = useState("");
  const userId = localStorage.getItem("user_id");
  const dispatch = useDispatch();

  async function handleCommentSubmit(){
    const sentComment = await SendComment(Number(userId), comment, postId);
    console.log(sentComment);
    dispatch(addComment(sentComment));
    setComment("");
  }


  return (
      <InputGroup className="shadow rounded-5">
        <Form.Control className="shadow" style={{fontSize: "3rem"}} as="textarea" aria-label="With textarea" />
        <InputGroup.Text  style={{fontSize: "3rem"}}       onClick={handleCommentSubmit}>
          Send
          </InputGroup.Text>

      </InputGroup>
  );
}
