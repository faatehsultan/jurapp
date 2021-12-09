import "./style.css";
import AuthForm from "../../components/AuthForm";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enableSubmitBtn, setEnableSubmitBtn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  useEffect(() => {
    if (email && password) {
      setEnableSubmitBtn(true);
    } else {
      setEnableSubmitBtn(false);
    }
  }, [email, password]);

  return (
    <AuthForm>
      <div className="d-flex text-end justify-content-end align-items-center w-100 p-1">
        <small className="font_inter">
          New to Jur? <Link to="/signup">Sign Up</Link>
        </small>
      </div>
      <div className="login w-100 d-flex justify-content-center align-items-center">
        <form className="form-group formContent w-100" onSubmit={handleLogin}>
          <div className="fs-4 fw-bold">Sign In</div>
          <p className="text-gray">Let's get started with Jur</p>
          <div className="mt-3 font_inter">
            Email Address <span className="text-danger">*</span>
          </div>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="mt-3 font_inter">
            Password <span className="text-danger">*</span>
          </div>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {/* remember me checkbox */}
          <div className="form-check mt-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember me
            </label>
          </div>

          <div className="mt-3">
            <input
              type="submit"
              className={`btn btn-${
                enableSubmitBtn ? "primary" : "secondary"
              } btn-block`}
              value="Sign In"
              disabled={!enableSubmitBtn}
            />
          </div>
        </form>
      </div>
    </AuthForm>
  );
}
