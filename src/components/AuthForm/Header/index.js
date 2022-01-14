import { Link } from "react-router-dom";
import "./style.css";

export default function Header(props) {
  const handleLogout = () => {
    localStorage.removeItem("user");
    props.setUser(null);
  };

  return (
    <div className="header p-3 d-flex justify-content-between align-items-center text-dark font_inter position-fixed w-100 bg-light top-0 left-0">
      <img src="img/Logo.png" alt="" />
      <div className="d-flex justify-content-evenly align-items-center">
        <Link to="#" className="btn text-dark">
          Dashboard
        </Link>
        <button className="btn text-dark" onClick={handleLogout}>
          <img src="/img/jd.png" alt="" /> Log Out
        </button>
      </div>
    </div>
  );
}
