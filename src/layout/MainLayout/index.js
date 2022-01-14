import "./style.css";
import Header from "../../components/AuthForm/Header";
import { Link } from "react-router-dom";

export default function MainLayout(props) {
  return (
    <div className="mainLayout" style={{ minHeight: "100vh" }}>
      <Header {...props} />
      <div className="" style={{ minHeight: "100vh" }}>
        <div className="sidebar bg-gray p-4 p-md-5 d-flex flex-column align-items-center justify-content-start pt-5 position-fixed top-0 left-0 h-100">
          <Link to="/" className="btn fs-5 fw-bold">
            Home
          </Link>
          <Link to="/add-app" className="btn fs-5 fw-bold">
            Add App
          </Link>
          <Link to="/users" className="btn fs-5 fw-bold">
            Users
          </Link>
          <Link to="/apps" className="btn fs-5 fw-bold">
            Apps
          </Link>
          <Link to="/admin" className="btn fs-5 fw-bold">
            Admin
          </Link>
        </div>
        <div className="mainContainer col-12 col-md-7 col-lg-8 col-xl-9 authBottomMobile d-flex flex-column justify-content-start align-items-center">
          {props.children}
        </div>
      </div>
    </div>
  );
}
