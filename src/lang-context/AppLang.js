import React, { Component } from "react";
import Child from "./Child";
import LangControls from "./LangControls";
import LanguageContext from "./LanguageContext";

export default class AppLang extends Component {
  render() {
    return (
      <LanguageContext.Provider>
        <div className="AppLang">
          <LangControls />
          <Child />
        </div>
      </LanguageContext.Provider>
    );
  }
}
