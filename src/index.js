import React from "react";
import { createRoot } from "react-dom/client";
import AuthProvider from "./apis/AuthContextApi";
import App from "./App";

createRoot(document.getElementById("root")).render(
      <AuthProvider><App/></AuthProvider>
);
