import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.scss";

// eslint-disable-next-line no-undef
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
