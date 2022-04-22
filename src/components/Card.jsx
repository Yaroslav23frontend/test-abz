import React from "react";
import Img from "react-cool-img";
import imgDef from "../img/photo-cover.svg";
import Tooltip from "./UI/Tooltip";
import { motion } from "framer-motion";
export default function Card({ data }) {
  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={list}
      transition={{ duration: 1 }}
      className="card-item"
    >
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
    </motion.div>
  );
}
