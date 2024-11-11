import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import EmploymentVerificationForm from "./EmploymentVerificationForm.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EmploymentVerificationForm />
  </StrictMode>
);
