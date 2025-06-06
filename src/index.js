import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "animate.css";
import FlareCursor from "./cursor/FlareCursor";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FlareCursor />
    <App />
  </React.StrictMode>
);
