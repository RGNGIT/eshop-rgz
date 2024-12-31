import React, { useState } from "react";
import '../styles/auth.css';

export default function AuthForm() {
  const [activeTab, setActiveTab] = useState("login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    role: "admin",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === "login") {
      console.log("Logging in with:", { username: formData.username, password: formData.password });
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert("Пароли не совпадают!");
        return;
      }
      console.log("Registering with:", formData);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "20px" }}>
        <button
          style={{
            padding: "10px",
            flex: 1,
            background: activeTab === "login" ? "#4CAF50" : "#ccc",
            color: activeTab === "login" ? "white" : "black",
            cursor: "pointer",
            border: "none",
          }}
          onClick={() => setActiveTab("login")}
        >
          Логин
        </button>
        <button
          style={{
            padding: "10px",
            flex: 1,
            background: activeTab === "register" ? "#4CAF50" : "#ccc",
            color: activeTab === "register" ? "white" : "black",
            cursor: "pointer",
            border: "none",
          }}
          onClick={() => setActiveTab("register")}
        >
          Регистрация
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        {activeTab === "login" ? (
          <>
            <input
              type="text"
              name="username"
              placeholder="Логин"
              value={formData.username}
              onChange={handleInputChange}
              className="auth-input"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Пароль"
              value={formData.password}
              onChange={handleInputChange}
              className="auth-input"
              required
            />
          </>
        ) : (
          <>
            <input
              type="text"
              name="username"
              placeholder="Логин"
              value={formData.username}
              onChange={handleInputChange}
              className="auth-input"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Пароль"
              value={formData.password}
              onChange={handleInputChange}
              className="auth-input"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Повторите пароль"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="auth-input"
              required
            />
            <select
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="auth-input"
              style={{ padding: "10px" }}
            >
              <option value="admin">Администратор</option>
              <option value="audit">Аудитор</option>
              <option value="carOwner">Автовладелец</option>
            </select>
          </>
        )}
        <button type="submit" className="auth-button">
          {activeTab === "login" ? "Войти" : "Зарегистрироваться"}
        </button>
      </form>
    </div>
  );
}