import React from "react";
import Img from "react-cool-img";
import { Link } from "react-router-dom";
import logo from "../img/Logo.svg";
import Button from "./UI/Button";
export default function Nav() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/">
              <Img
                className="landing-section-header-img"
                src={logo}
                alt="Avatar"
              />
            </Link>
          </div>
          <ul className="nav-list">
            <li>
              <Button
                onClick={() => {
                  window.location.href = "#user";
                }}
              >
                Users
              </Button>
            </li>
            <li>
              <Button
                onClick={() => {
                  window.location.href = "#sign-up";
                }}
              >
                Sign up
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
