import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/UI/Button";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="container" style={{ height: "100vh", content: "" }}>
      <div className="not-found">
        <h1>404</h1>
        <p>Not found</p>
        <Button
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          Home
        </Button>
      </div>
    </div>
  );
}
export default NotFound;
