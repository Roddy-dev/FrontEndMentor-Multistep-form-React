import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./assets/fonts/Ubuntu-Regular.ttf";
import "./assets/fonts/Ubuntu-Medium.ttf";
import "./assets/fonts/Ubuntu-Bold.ttf";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
