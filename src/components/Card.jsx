import React from "react";
import Img from "react-cool-img";
import imgDef from "../img/photo-cover.svg";
export default function Card({ data }) {
  return (
    <div className="card-item">
      <div className="card-item-img">
        <Img
          style={{
            borderRadius: "50%",
            width: "70px",
            height: "70px",
          }}
          className="landing-section-header-img"
          src={imgDef}
          alt="Avatar"
        />
      </div>
      <div className="card-item-name">
        <p>Takamaru Ayako Jurrien Jurrien Jurrien</p>
      </div>
      <ul className="card-item-list">
        <li>Front-end Developer Front-end Developer Front-end Developer</li>
        <li>frontend_developer@gamil.com</li>
        <li>+38(098) 278 44 24</li>
      </ul>
    </div>
  );
}
