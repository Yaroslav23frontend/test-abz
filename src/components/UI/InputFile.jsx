import React from "react";
export default function InputFile({ name, error, ...props }) {
  return (
    <div className="input-file-container">
      <input
        {...props}
        className={`input-file ${error ? "error-input" : ""}`}
        placeholder="file"
        id="user_audio"
        type="file"
      />
      <input
        type="text"
        className={`input ${error ? "error-input" : ""}`}
        value={name}
        placeholder="Upload your photo"
        disabled
      ></input>
    </div>
  );
}
