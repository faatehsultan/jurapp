import "./style.css";

export default function Welcome(props) {
  return (
    <div className="welcome">
      <div className="welcomeBoxContainer">
        <div className="welcomeBox"></div>
      </div>
      <br />
      <button className="btn btn-primary">Let's Start</button>
    </div>
  );
}
