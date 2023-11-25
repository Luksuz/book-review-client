import PostCard from "./components/PostCard";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import fetchSuggestedPosts from "./api/SuggestedPostsApi";
import Layout from "./components/Layout/Layout";


export default function Suggested() {
  const [posts, setPosts] = useState([]);
  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchSuggestedPosts(userId);
        const data = await response;
        console.log(data);
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      {posts &&
        posts.map((post) => (
          <Row  className="justify-content-center justify-content-md-end align-items-center py-4">
            <Col md={9}>
            <PostCard key={post.id + 10000} data={post} />
            </Col>
          </Row>
        ))}
    </Layout>
  );
}
