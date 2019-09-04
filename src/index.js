import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import App from "./paltrows-power-toes/src/App";
import AppLang from "./lang-context/AppLang";
import RegistrationForm from "./registrationForm/registrationForm";
import App from "./playingwithdanger/App";

// import DemonymApp from "./demonymapp/demonymApp";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
