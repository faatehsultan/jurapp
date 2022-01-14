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
import Layout from "./layout";
import Users from "./pages/Users";
import AddApp from "./pages/AddApp";
import UserDetails from "./pages/UserDetails";
import AppDetails from "./pages/AppDetails";
import Admin from "./pages/Admin";

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
          <Route path="/welcome">
            {user ? (
              <Layout user={user} setUser={setUser}>
                <Welcome />
              </Layout>
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/dashboard">
            {user ? (
              <Layout user={user} setUser={setUser}>
                <Users />
              </Layout>
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/users">
            {user ? (
              <Layout user={user} setUser={setUser}>
                <UserDetails />
              </Layout>
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/add-app">
            {user ? (
              <Layout user={user} setUser={setUser}>
                <AddApp />
              </Layout>
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/apps">
            {user ? (
              <Layout user={user} setUser={setUser}>
                <AppDetails />
              </Layout>
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/admin">
            {user ? (
              <Layout user={user} setUser={setUser}>
                <Admin />
              </Layout>
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
