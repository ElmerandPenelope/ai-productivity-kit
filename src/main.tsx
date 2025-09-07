import React from "react";
import { createRoot } from "react-dom/client";
import LandingPage from "./LandingPage";

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Root element #root not found");
createRoot(rootEl).render(<LandingPage />);
