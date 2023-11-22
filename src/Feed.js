import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import PostCard from "./components/PostCard";
import handleFeedFetch from "./api/FeedApi";
import { useSelector, useDispatch } from "react-redux";
import { setPosts } from "./features/posts/postSlice";
import Layout from "./components/Layout/Layout";


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
    <div className="d-flex flex-column">
      {posts.map((post) => (
        <Row className="justify-content-center align-items-center py-4" style={{height: "27vh"}}>
          <PostCard key={post.id} data={post} />
        </Row>
      ))}
    </div>
    </Layout>
  );
}
