import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

console.log(import.meta.env.VITE_BASE_URL);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
