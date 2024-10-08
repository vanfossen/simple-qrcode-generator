// react and other libraries
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// components
import App from "./App.jsx";

// style
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
