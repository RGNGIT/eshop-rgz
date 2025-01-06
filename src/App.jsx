import Auth from "./components/pages/Auth";
import Landing from "./components/pages/Landing";
import Management from "./components/pages/Management";
import Profile from "./components/pages/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reports from "./components/pages/Reports";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/management" element={<Management />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
}