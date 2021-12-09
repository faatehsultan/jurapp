import "./style.css";
import AuthForm from "../../components/AuthForm";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [enableSubmitBtn, setEnableSubmitBtn] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password, confirmPassword);
  };

  useEffect(() => {
    if (firstName && lastName && email && password && confirmPassword) {
      setEnableSubmitBtn(true);
    } else {
      setEnableSubmitBtn(false);
    }
  }, [firstName, lastName, email, password, confirmPassword]);

  return (
    <AuthForm>
      <div className="d-flex text-end justify-content-end align-items-center w-100 p-1">
        <small className="font_inter">
          Already a Member? <Link to="/signup">Sign In</Link>
        </small>
      </div>
      <div className="signup">
        <form className="form-group formContent w-100" onSubmit={handleSignup}>
          <div className="fs-4 fw-bold">Sign Up</div>
          <p className="text-gray">Let's get started with Jur</p>
          <div className="mt-3 font_inter">
            Full Name <span className="text-danger">*</span>
          </div>
          <div className="row">
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
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
          <div className="mt-3 font_inter">
            Verify Password <span className="text-danger">*</span>
          </div>
          <input
            type="password"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
              value="Sign Up"
              disabled={!enableSubmitBtn}
            />
          </div>
        </form>
      </div>
    </AuthForm>
  );
}
