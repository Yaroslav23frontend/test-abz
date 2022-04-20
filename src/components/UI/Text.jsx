import React from "react";
export default function Text({ variant, children, props }) {
  if (variant === "h1") {
    return (
      <h1 {...props} className="h1">
        {children}
      </h1>
    );
  }
  if (variant === "p") {
    return (
      <p {...props} className="p">
        {children}
      </p>
    );
  }
}
