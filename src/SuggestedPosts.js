import PostCard from "./components/PostCard";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
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
  }, []);

  return (
    <Layout>
      {posts &&
        posts.map((post) => (
          <Row
            className="justify-content-center align-items-center py-4"
            style={{ height: "27vh" }}
          >
            <PostCard key={post.id + 10000} data={post} />
          </Row>
        ))}
    </Layout>
  );
}
