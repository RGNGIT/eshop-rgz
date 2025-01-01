import HeaderSwitchButton from "./header-switch-button";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const headerButtons = [];

  function logoff() {
    localStorage.removeItem("userToken");
    localStorage.removeItem("fullName");
    localStorage.removeItem("login");

    navigate("/");
  }

  switch (location.pathname) {
    case '/':
      // Пуш кнопки авторизации
      headerButtons.push(!localStorage.getItem('userToken') ?
        <HeaderSwitchButton text="Авторизация" onClick={() => navigate("/auth")} style={{ marginLeft: "auto" }} /> :
        <HeaderSwitchButton text={localStorage.getItem("fullName")} onClick={() => navigate("/profile")} style={{ marginLeft: "auto" }} />
      );
      break;
    case '/profile':
      // Пуш кнопки логофа
      headerButtons.push(<HeaderSwitchButton text="Выйти из профиля" onClick={() => logoff()} style={{ marginLeft: "auto" }} />);
    case '/auth':
      // Пуш кнопки на главную
      headerButtons.push(<HeaderSwitchButton text="На главную" onClick={() => navigate("/")} style={{ marginLeft: "auto" }} />);
      break;
  }

  return <header>{headerButtons}</header>
}