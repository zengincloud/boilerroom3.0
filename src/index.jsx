import "../global.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DashboardCrm } from "./screens/DashboardCrm/DashboardCrm.jsx";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <DashboardCrm />
  </StrictMode>,
);
