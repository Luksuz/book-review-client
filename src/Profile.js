import { useState, useEffect } from "react";
import fetchUserProfile from "./api/UserProfileApi";
import ProfileCard from "./components/ProfileCard";
import Layout from "./components/Layout/Layout";
import { Row, Col } from "react-bootstrap";

export default function UserProfile() {
  const [profile, setProfile] = useState(null);
  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserProfile(userId);
        setProfile(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <Row className="d-flex justify-content-end">
        <Col md={8}>
          <div className="d-flex justify-content-md-end pe-md-3">
            {profile && <ProfileCard data={profile} />}
          </div>
        </Col>
      </Row>
    </Layout>
  );
}
