import "./style.css";
import Header from "../../components/AuthForm/Header";

export default function Welcome() {
  return (
    <div className="welcome" style={{ minHeight: "100vh" }}>
      <Header />
      <div className="row" style={{ minHeight: "86vh" }}>
        <div className="bg-gray col-12 col-md-5 col-lg-4 col-xl-3 p-4 p-md-5 d-flex flex-column align-items-center justify-content-center ">
          <div>
            <div className="fs-3 fw-bold">Let's Start</div>
            <br />
            <div className="font_inter">
              Most of this information should already be present in your
              arbitration agreement. In case it is not, you can refer to the FAQ
              section to find out. The counter-party will also be asked to
              mention their preference. The final decision will be amicably made
              later by the arbitrator.
            </div>
          </div>
        </div>
        <div className="p-4 col-12 col-md-7 col-lg-8 col-xl-9 authBottomMobile d-flex flex-column justify-content-start align-items-center">
          <div className="welcomeBoxContainer">
            <div className="welcomeBox"></div>
          </div>
          <br />
          <button className="btn btn-primary">Let's Start</button>
        </div>
      </div>
    </div>
  );
}
