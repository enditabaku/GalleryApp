// react imports
import React from "react";

// project imports
import App from "./App.tsx";
import "./index.css";
import Store from "./store/Store.ts";

// 3rd party
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);
