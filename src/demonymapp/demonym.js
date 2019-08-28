import React from "react";
import ReactDOM from "react-dom";

import "./demonym.css";

export default function Demonym(props) {
  return (
    <div className="demonym">
      A {props.name} comes from {props.country}
    </div>
  );
}
