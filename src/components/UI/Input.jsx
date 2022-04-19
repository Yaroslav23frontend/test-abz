import React from "react";
export default function Input({ styleContainer, ...props }) {
  return <input {...props} className="form-control input" />;
}
