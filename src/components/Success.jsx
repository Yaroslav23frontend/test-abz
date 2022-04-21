import React from "react";
import Img from "react-cool-img";
import img from "../img/success-image.svg";
import Text from "./UI/Text";
export default function Success() {
  return (
    <div className="success-container">
      <Text variant="h1">User successfully registered</Text>
      <Img className="saccess-img" src={img} alt="Avatar" />
    </div>
  );
}
