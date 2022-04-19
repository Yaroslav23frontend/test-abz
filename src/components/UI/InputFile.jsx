import React, { useEffect, useState } from "react";
export default function InputFile({ styleContainer, ...props }) {
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
        onChange={(e) => {
          setFile(e.target.value);
        }}
        value={file}
      />
      <input
        type="text"
        className="input"
        value={file}
        placeholder="Upload your photo"
        disabled
      ></input>
    </div>
  );
}
