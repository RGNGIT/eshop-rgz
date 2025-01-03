import Auth from "./components/pages/Auth";
import Landing from "./components/pages/Landing";
import Management from "./components/pages/Management";
import Profile from "./components/pages/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/management" element={<Management />} />
      </Routes>
    </Router>
  );
}