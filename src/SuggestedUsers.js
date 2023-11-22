import UserCard from "./components/ProfileCard";
import { useEffect, useState } from "react";
import fetchSuggestedUsers from "./api/SuggestedUsersApi";
import Layout from "./components/Layout/Layout";


export default function SuggestedUsers() {
  const [users, setUsers] = useState([]);
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
  }, []);

  return (
    <Layout>
      {users && users.map((user) => (
        <UserCard key={user.id} data={user} />
      ))}
    </Layout>
  );
}
