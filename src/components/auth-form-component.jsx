import React, { useState } from "react";
import '../styles/auth.css';
import { toSnakeCase } from "../utils";
import { login, register } from "../api";
import { useNavigate } from "react-router-dom";

export default function AuthForm() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");
  const [formData, setFormData] = useState({
    name: "",
    login: "",
    lastName: "",
    middleName: "",
    dob: null,
    passportSerial: "",
    passportNumber: "",
    issued: "",
    address: "",
    password: "",
    confirmPassword: "",
    role: "admin",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const snakeCasedFormData = toSnakeCase(formData);
    if (activeTab === "login") {
      console.log("Logging in with:", { username: formData.username, password: formData.password });

      const response = await login(snakeCasedFormData);
      if (response.status != 200)
        alert(response.data);
      else {
        alert("Успешно залогинен");
        localStorage.setItem("userToken", response.data?.token);
        localStorage.setItem("fullName", response.data?.fullName);
        localStorage.setItem("login", response.data?.login);
        localStorage.setItem("role", response.data?.role);
        localStorage.setItem("avatar", register.data?.avatar);

        navigate("/");
      }

    } else {
      if (formData.password !== formData.confirmPassword) {
        alert("Пароли не совпадают!");
        return;
      }
      console.log("Registering with:", snakeCasedFormData);

      const response = await register(snakeCasedFormData);
      if (response.status != 200)
        alert(response.data);
      else {
        alert("Пользователь успешно создан");
        localStorage.setItem("userToken", response.data?.token);
        localStorage.setItem("fullName", response.data?.fullName);
        localStorage.setItem("login", response.data?.login);
        localStorage.setItem("role", response.data?.role);
        localStorage.setItem("avatar", register.data?.avatar);
        
        navigate("/");
      }
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "20px" }}>
        <button
          style={{
            padding: "10px",
            flex: 1,
            ...(activeTab === "login" && {
              background: "#4CAF50",
              color: "white",
            }),
            cursor: "pointer",
            border: "none",
          }}
          className="auth-tab-selector"
          onClick={() => setActiveTab("login")}
        >
          Логин
        </button>
        <button
          style={{
            padding: "10px",
            flex: 1,
            ...(activeTab === "register" && {
              background: "#4CAF50",
              color: "white",
            }),
            cursor: "pointer",
            border: "none",
          }}
          className="auth-tab-selector"
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
              name="login"
              placeholder="Логин"
              value={formData.login}
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
              name="name"
              placeholder="Имя"
              value={formData.name}
              onChange={handleInputChange}
              className="auth-input"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Фамилия"
              value={formData.lastName}
              onChange={handleInputChange}
              className="auth-input"
              required
            />
            <input
              type="text"
              name="middleName"
              placeholder="Отчество"
              value={formData.middleName}
              onChange={handleInputChange}
              className="auth-input"
              required
            />
            <input
              type="date"
              name="dob"
              placeholder="Дата рождения"
              value={formData.dob}
              onChange={handleInputChange}
              className="auth-input"
              required
            />
            <input
              type="text"
              name="passportSerial"
              placeholder="Серия паспорта"
              value={formData.passportSerial}
              onChange={handleInputChange}
              className="auth-input"
              required
            />
            <input
              type="text"
              name="passportNumber"
              placeholder="Номер паспорта"
              value={formData.passportNumber}
              onChange={handleInputChange}
              className="auth-input"
              required
            />
            <input
              type="text"
              name="issued"
              placeholder="Выдан"
              value={formData.issued}
              onChange={handleInputChange}
              className="auth-input"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Адрес"
              value={formData.address}
              onChange={handleInputChange}
              className="auth-input"
              required
            />
            <input
              type="text"
              name="login"
              placeholder="Логин"
              value={formData.login}
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