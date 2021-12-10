import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Welcome from "./pages/Welcome";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let userData = localStorage.getItem("user");
    if (userData) {
      setUser(userData);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            {!user && <Redirect to="/login" />}
            {user && <Redirect to="/dashboard" />}
          </Route>
          <Route path="/login">
            {!user ? (
              <Login user={user} setUser={setUser} />
            ) : (
              <Redirect to="/dashboard" />
            )}
          </Route>
          <Route path="/signup">
            {!user ? <Signup /> : <Redirect to="/dashboard" />}
          </Route>
          <Route path="/dashboard">
            {user ? (
              <Welcome user={user} setUser={setUser} />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
