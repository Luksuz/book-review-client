import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import PostCard from "./components/PostCard";
import handleFeedFetch from "./api/FeedApi";
import { useSelector, useDispatch } from "react-redux";
import { setPosts } from "./features/posts/postSlice";
import Layout from "./components/Layout/Layout";
import WritePost from "./components/WritePost";

document.body.style = "background: #FFFCF9;";

export default function Feed() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    const userToken = localStorage.getItem("token");
    const userId = localStorage.getItem("user_id");

    const fetchData = async () => {
      try {
        const data = await handleFeedFetch(userToken, userId);
        console.log(data);
        dispatch(setPosts(data));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <Layout>
      <Row className="d-flex justify-content-end">
        <Col md={9}>
          <WritePost />
          {posts.map((post) => (
            <Row key={post.id} className="d-flex align-items-center py-4">
              <PostCard data={post}/>
            </Row>
          ))}
        </Col>
        </Row>
    </Layout>
  );
  
}
