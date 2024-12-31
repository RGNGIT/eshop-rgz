import HeaderSwitchButton from "./header-switch-button";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const landingButtons = [<HeaderSwitchButton text="Авторизация" onClick={() => navigate("/auth")} style={{ marginLeft: "auto" }} />];
  const authButtons = [<HeaderSwitchButton text="На главную" onClick={() => navigate("/")} style={{ marginLeft: "auto" }} />];
  let headerButtons = [];

  switch (location.pathname) {
    case '/':
      headerButtons = landingButtons;
      break;
    case '/auth':
      headerButtons = authButtons;
    break;
  }

  return <header>{headerButtons}</header>
}