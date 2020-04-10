import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./navbar.css";

export const Navbar = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const logoutHandler = (e) => {
    e.preventDefault();
    auth.logout();
    history.push("/");
  };
  return (
    <div>
      <nav>
        <div className="nav-wrapper blue darken-1  navbar">
          <span href="/" className="brand-logo">
            App name
          </span>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to="/create">Create</NavLink>
            </li>
            <li>
              <NavLink to="/links">Links</NavLink>
            </li>
            <li>
              <a href="/" onClick={logoutHandler}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
