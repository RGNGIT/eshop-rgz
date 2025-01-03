import Header from "../header-component";
import Footer from "../footer-component";
import { AdminPanel } from "../admin-panel-component";

export default function Management() {
  return (
    <div>
      <Header />
      <AdminPanel/>
      <Footer />
    </div>
  );
}