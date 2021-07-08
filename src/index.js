import "./index.css";

// import App from "./components/App";
import Header from "./components/Header";
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
