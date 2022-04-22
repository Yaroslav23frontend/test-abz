import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";

import Spinner from "./components/Spinner";
const App = React.lazy(() => import("./App"));
const DataProivider = React.lazy(() =>
  import("./components/context/DataContext")
);
const PostProivider = React.lazy(() =>
  import("./components/context/PostContext")
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Suspense
    fallback={
      <Spinner
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    }
  >
    <React.StrictMode>
      <PostProivider>
        <DataProivider>
          <App />
        </DataProivider>
      </PostProivider>
    </React.StrictMode>
  </Suspense>
);
