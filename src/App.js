import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Messages from "./Messages";

function App() {
  return (
    <div className="App">
      <h1>YOUR APPLICATION NAME!</h1>
      <Messages name="Messages" unread={0} />
      <Messages name="Notifications" unread={10} />
    </div>
  );
}

export default App;
