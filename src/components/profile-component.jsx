import React, { useEffect, useState } from "react";
import '../styles/profile.css';
import { getCurrentUserInfo } from "../api";
import { defineUserFriendlyRoleName } from "../utils";

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    avatar: "",
    name: "",
    role: ""
  });

  const [editValues, setEditValues] = useState(user);

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
          <button onClick={handleSave} className="profile-edit-button">
            Сохранить
          </button>
        </div>
      ) : (
        <div className="view-container">
          <h2>{user.name}</h2>
          <p>{user.role}</p>
          <button onClick={handleEditToggle} className="profile-edit-button">
            Редактировать
          </button>
        </div>
      )}
    </div>
  );
}