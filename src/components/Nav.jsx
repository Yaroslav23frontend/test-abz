import React from "react";
import Img from "react-cool-img";
import logo from "../img/Logo.svg";
import Button from "./UI/Button";
export default function Nav() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-container">
          <div className="nav-logo">
            <Img
              className="landing-section-header-img"
              src={logo}
              alt="Avatar"
            />
          </div>
          <ul className="nav-list">
            <li>
              <Button>Users</Button>
            </li>
            <li>
              <Button>Sign up</Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
