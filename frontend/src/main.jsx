import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AccountProvider from "./context/AccountProvider.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AccountProvider>
      <App />
    </AccountProvider>
  </StrictMode>
);
