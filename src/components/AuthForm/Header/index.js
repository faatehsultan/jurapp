import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

export default function Header(props) {
  const handleLogout = () => {
    localStorage.removeItem("user");
    props.setUser(null);
  };

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
    // eslint-disable-next-line
  }, [window.location]);

  return (
    // <div className="header p-3 d-flex justify-content-between align-items-center text-dark font_inter position-fixed w-100 bg-light top-0 left-0">
    <Navbar
      bg="light"
      expand="lg"
      className="w-100"
      fixed="top"
      onToggle={() => setShow(!show)}
    >
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src="img/Logo.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="d-flex justify-content-end align-items-center"
        >
          {/* desktop nav */}
          <Nav className="d-md-flex justify-content-md-end align-items-center d-none">
            <Nav.Link>
              <Link to="/dashboard">Dashboard</Link>
            </Nav.Link>
            <Nav.Link>
              <button className="btn text-dark" onClick={handleLogout}>
                <img src="/img/jd.png" alt="" /> Log Out
              </button>
            </Nav.Link>
          </Nav>
          {/* mobile nav */}
          {show && (
            <Nav className="d-flex justify-content-md-end align-items-center d-md-none">
              <Nav.Link>
                <Link to="/dashboard">Dashboard</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/add-app">Add App</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/users">Users</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/apps">Apps</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/admin">Admin</Link>
              </Nav.Link>
              <Nav.Link>
                <button className="btn text-dark" onClick={handleLogout}>
                  <img src="/img/jd.png" alt="" /> Log Out
                </button>
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // </div>
  );
}
