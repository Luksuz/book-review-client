import UserCard from "./components/ProfileCard";
import { useEffect, useState } from "react";
import fetchSuggestedUsers from "./api/SuggestedUsersApi";
import searchUsers from "./api/SearchUsersApi";
import Layout from "./components/Layout/Layout";
import { Row, Col, InputGroup, Button } from "react-bootstrap";


export default function SuggestedUsers() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchSuggestedUsers(userId)
        const data = await response
        console.log(data);
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSearchUsers(searchTerm) {
    const response = await searchUsers(searchTerm)
    const data = await response
    console.log(data);
    setUsers(data);
  }

  return (
    <Layout>
      <Row className="d-flex justify-content-end">
        <Col md={6}>
          <InputGroup className="mb-3">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control"
              placeholder="Search for users"
              aria-label="Username"
            />
            <Button onClick={() => handleSearchUsers(searchTerm)}>Search</Button>
          </InputGroup>
        </Col>
        <Col md={8}>
      {users && users.map((user) => (
        <UserCard key={user.id} data={user} />
      ))}
      </Col>
      </Row>
    </Layout>
  );
}
