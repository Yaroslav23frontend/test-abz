import React from "react";
export default function Tooltip({ children, text, mtop }) {
  return (
    <div class="tooltip">
      {children}
      <span class="tooltiptext" style={{ marginTop: mtop }}>
        {text}
      </span>
    </div>
  );
}
