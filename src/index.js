import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from "./serviceWorker";

// Use the new React 18 createRoot API if available, otherwise fall back to render
const rootElement = document.getElementById("root");
if (ReactDOM.createRoot) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<React.StrictMode><App /></React.StrictMode>);
} else {
  ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, rootElement);
}

// Completely unregister service worker to prevent caching issues
serviceWorker.unregister();