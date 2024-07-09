import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

console.log(import.meta.env.VITE_SUPABASE_URL);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
