import React, { useEffect, useState } from "react";
export default function InputFile({ name, error, ...props }) {
  const [file, setFile] = useState("");
  useEffect(() => {
    console.log(file);
  }, [file]);
  return (
    <div className="input-file-container">
      <input
        {...props}
        className="input-file"
        placeholder="file"
        id="user_audio"
        type="file"
      />
      <input
        type="text"
        className={`input ${error ? "error-img" : ""}`}
        value={name}
        placeholder="Upload your photo"
        disabled
      ></input>
    </div>
  );
}
