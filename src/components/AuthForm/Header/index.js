import { Link } from "react-router-dom";
import "./style.css";

export default function Header() {
  return (
    <div className="header p-3 d-flex justify-content-between align-items-center text-dark font_inter">
      <img src="img/Logo.png" alt="" />
      <div className="d-flex justify-content-evenly align-items-center">
        <Link to="#" className="btn text-dark">
          Dashboard
        </Link>
        <Link to="#" className="btn text-dark">
          <img src="/img/jd.png" alt="" /> Log Out
        </Link>
      </div>
    </div>
  );
}
