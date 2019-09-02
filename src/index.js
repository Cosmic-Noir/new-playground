import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./paltrows-power-toes/src/App";
import AppLang from "./lang-context/AppLang";

// import DemonymApp from "./demonymapp/demonymApp";

ReactDOM.render(
  <BrowserRouter>
    <AppLang />
  </BrowserRouter>,
  document.getElementById("root")
);
