import React, { useState } from "react";
import '../styles/profile.css';

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    avatar: "https://via.placeholder.com/150", // Замени ссылку на реальное изображение
    name: "Иван Иванов",
    email: "ivan.ivanov@example.com",
  });

  const [editValues, setEditValues] = useState(user);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setUser(editValues);
    setIsEditing(false);
  };

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
            type="email"
            name="email"
            value={editValues.email}
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
          <p>{user.email}</p>
          <button onClick={handleEditToggle} className="profile-edit-button">
            Редактировать
          </button>
        </div>
      )}
    </div>
  );
}