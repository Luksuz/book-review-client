import { useState, useEffect } from "react";
import fetchUserProfile from "./api/UserProfileApi";
import ProfileCard from "./components/ProfileCard";
import Layout from "./components/Layout/Layout";



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
    }, []);

    return (
        <Layout>
            {profile && <ProfileCard data={profile} />} 
        </Layout>
    )
}