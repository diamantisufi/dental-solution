import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./App.scss";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StateProvider } from "./store";
import { CircularProgress } from "@material-ui/core";

ReactDOM.render(
  <StateProvider>
    <Suspense
      fallback={
        <CircularProgress
          color="primary"
          style={{ position: "absolute", top: "50%", left: "50%" }}
        />
      }
    >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Suspense>
  </StateProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
