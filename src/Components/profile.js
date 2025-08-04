import React, { useEffect, useState, useContext} from "react";
import { UserContext } from "../Contexts/UserContext";
import { getUserById } from "../API/users";
import "../CSS/profile.css";
import { useNavigate } from 'react-router-dom';


// Example avatar images (can be swapped with any animal avatars)
const avatar = "Assets/avatar/cat.png";


const Profile = () => {
  const { token } = useContext(UserContext);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchUser = async () => {
      if (!token) {
        navigate("/"); 
        return null; 
      }
      try {
        const userData = await getUserById(token);
        setUser(userData.body[0]);

      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };
    fetchUser();
  }, [token]);

  return (
    <div className="profile-screen">
      <div className="profile-avatar">
        {avatar && <img src={avatar} alt="avatar" />}
      </div>

      <div className="profile-info">
        <div className="profile-row">
          <div className="profile-left">
            <p><strong>First Name:</strong> {user?.firstName || "..."}</p>
            <p><strong>Last Name:</strong> {user?.lastName || "..."}</p>
          </div>
          <div className="profile-right">
            <p><strong>Email:</strong> {user?.email || "..."}</p>
          </div>
        </div>

        <hr className="profile-divider" />

        <div className="profile-media">
          <p><strong>Rented Media:</strong> Cruella</p>
          <p><strong>Purchased Media:</strong> Coco</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
