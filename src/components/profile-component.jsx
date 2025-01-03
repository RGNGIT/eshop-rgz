import React, { useEffect, useState } from "react";
import '../styles/profile.css';
import { getCurrentUserInfo } from "../api";
import { defineUserFriendlyRoleName } from "../utils";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    avatar: "",
    name: "",
    role: ""
  });

  const navigate = useNavigate();
  const [editValues, setEditValues] = useState(user);

  function logoff() {
    localStorage.removeItem("userToken");
    localStorage.removeItem("fullName");
    localStorage.removeItem("login");
    localStorage.removeItem("role");

    navigate("/");
  }

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // setEditValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // setUser(editValues);
    setIsEditing(false);
  };

  useEffect(() => {
    const fetchInfo = async () => {
      const response = await getCurrentUserInfo();
      if (response.status != 200)
        alert(response.data);
      else
        setUser({ name: `${response.data.last_name} ${response.data.name} ${response.data.middle_name}`, role: defineUserFriendlyRoleName(response.data.role), avatar: response.data.avatar });
    }
    fetchInfo();
  }, [])

  return (
    <div className="profile-container">
      <img src={user.avatar} alt="Avatar" className="avatar" />
      <div style={{ marginTop: "25px", marginLeft: "10px" }}>
        <h2>{user.name}</h2>
        <p>{user.role}</p>
      </div>
      {isEditing ? (
        <div className="edit-container">
          <input
            type="text"
            name="name"
            value={editValues.name}
            onChange={handleInputChange}
            placeholder="Имя"
            className="input"
          />
          <input
            type="role"
            name="role"
            value={editValues.role}
            onChange={handleInputChange}
            placeholder="Email"
            className="input"
          />
          <button onClick={handleSave} className="profile-button">
            Сохранить
          </button>
        </div>
      ) : (
        <div className="view-container">
          <button style={{marginLeft: "15px"}} onClick={handleEditToggle} className="profile-button">
            Редактировать
          </button>
          <button style={{marginLeft: "15px"}} onClick={logoff} className="profile-button">
            Выйти
          </button>
        </div>
      )}
    </div>
  );
}