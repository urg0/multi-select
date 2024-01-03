import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ReactSVG } from "react-svg";
import LoadingIcon from "./assets/icons/loading.svg";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense
      fallback={<ReactSVG src={LoadingIcon} className="loading-icon" />}
    >
      <App />
    </Suspense>
  </React.StrictMode>
);
