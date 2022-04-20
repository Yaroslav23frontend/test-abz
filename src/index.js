import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import App from "./App";
import DataProivider from "./components/context/DataContext";
import PostProivider from "./components/context/PostContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PostProivider>
      <DataProivider>
        <App />
      </DataProivider>
    </PostProivider>
  </React.StrictMode>
);
