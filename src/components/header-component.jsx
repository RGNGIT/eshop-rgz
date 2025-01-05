import HeaderProfileButton from "./header-profile-button";
import HeaderSwitchButton from "./header-switch-button";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const headerButtons = [];

  headerButtons.push(!localStorage.getItem('userToken') ?
    <HeaderSwitchButton text="Авторизация" onClick={() => navigate("/auth")} style={{ float: "right" }} /> :
    <HeaderProfileButton avatar={localStorage.getItem("avatar")} text={localStorage.getItem("fullName")} onClick={() => navigate("/profile")} style={{ float: "right" }} />
  );

  if (location.pathname != '/')
    headerButtons.push(<HeaderSwitchButton text="На главную" onClick={() => navigate("/")} style={{ float: "left" }} />);

  switch (location.pathname) {
    case '/':
      // Пуш кнопки управления у админа
      if (localStorage.getItem("role") == 'admin')
        headerButtons.push(<HeaderSwitchButton text={"Управление"} onClick={() => navigate("/management")} style={{ float: "left" }} />);
      break;
  }

  return <header style={{height: "49px"}}>{headerButtons}</header>
}