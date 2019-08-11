import React from "react";
import "./App.css";
import Messages from "./Messages";

function App() {
  return (
    <div className="App">
      <h1>YOUR APPLICATION NAME!</h1>
      <div>Hello!!!!</div>
      <Messages name="Messages" unread={0} />
      <Messages name="Notifications" unread={10} />
    </div>
  );
}

export default App;
