import React from "react";
import Img from "react-cool-img";
import imgDef from "../img/photo-cover.svg";
import Tooltip from "./UI/Tooltip";

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
          src={data?.photo || imgDef}
          alt="Avatar"
        />
      </div>
      <div className="card-item-name">
        <p className="truncate">{data.name}</p>
      </div>
      <ul className="card-item-list">
        <li className="truncate">{data.position}</li>
        <Tooltip text={data.email}>
          <li className="truncate">
            <a href={`mailto:${data.email}`}>{data.email}</a>
          </li>
        </Tooltip>

        <li className="truncate">{data.phone}</li>
      </ul>
    </div>
  );
}
