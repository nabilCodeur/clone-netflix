import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import FallbackComponent from "./components/FallbackComponent.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <ErrorBoundary FallbackComponent={FallbackComponent}>
      <App />
      </ErrorBoundary>
    </Router>
  </React.StrictMode>
);
