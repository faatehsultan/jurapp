import "./style.css";

export default function AuthForm(props) {
  return (
    <div className="authForm min-h-100vh__bigScreen">
      <div className="row min-h-100vh__bigScreen">
        <div className="bg-gray col-12 col-md-5 col-lg-4 col-xl-3 p-4 p-md-5 d-flex flex-md-column align-items-center justify-content-center authTopMobile">
          <div>
            <img src="/img/Logo.png" alt="" className="img-fluid mb-2" />
            <div className="d-none d-md-block">
              <br />
              <br />
              <br />
              <br />
            </div>
            <div className="fs-3 fw-bold">Becoma a modern arbitrator, Now.</div>
          </div>
          <div className="d-none d-md-block">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
          <div className="w-100 d-flex justify-content-center align-items-center illustration_container">
            <img
              src="/img/Illustration.png"
              alt=""
              className="img-fluid illustration"
            />
          </div>
        </div>
        <div className="p-4 col-12 col-md-7 col-lg-8 col-xl-9 authBottomMobile d-flex flex-column justify-content-between align-items-center">
          {props.children}
          <div className="d-flex text-center justify-content-center align-items-center w-100 p-1 mt-5 mt-md-0">
            <small className="text-gray fw-bold">
              Copyright &copy; {new Date().getFullYear()} Product by Jur Inc.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
