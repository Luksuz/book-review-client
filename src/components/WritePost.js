import { useState } from "react";
import InputGroup from "react-bootstrap/esm/InputGroup";
import { FormControl } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import { createPost } from "../api/PostApi";

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
    <div>
      <InputGroup className="mb-3 d-flex flex-column">
        <InputGroup.Text>
            Create a Post
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
        
      </InputGroup>
      <Button variant="secondary" onClick={handlePostSubmit}>
        Send
      </Button>
    </div>
  );
}
