import { useState } from "react";
import InputGroup from "react-bootstrap/esm/InputGroup";
import { FormControl, Col } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import { createPost } from "../api/PostApi";

const username = localStorage.getItem("username");
export default function WritePost() {
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
  });
  const userId = localStorage.getItem("user_id");

  async function handlePostSubmit() {
    const sentPost = await createPost(
      Number(userId),
      newPost.title,
      newPost.content
    );
    console.log(sentPost);
  }

  return (
    <Col className="d-flex p-5">
      <InputGroup className="mb-3 d-flex flex-column">
        <InputGroup.Text className="d-flex">
            <img src="/user.png" className="img-fluid rounded-circle" height={"8%"} width={"8%"} />
            <p className="fs-2">{username}</p>
       </InputGroup.Text>

        <FormControl
          placeholder="Write a post title"
          aria-label="Title"
          aria-describedby="title-text"
          className="w-100"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />

        <FormControl
          placeholder="Write a post content"
          aria-label="post"
          aria-describedby="post-text"
          className="w-100"
          as="textarea"
          rows={4}
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        />
         <Button variant="secondary" onClick={handlePostSubmit}>
        Post
      </Button>
      </InputGroup>
     
    </Col>
  );
}
