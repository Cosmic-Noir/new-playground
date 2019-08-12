import React from "react";
import "./App.css";
import Messages from "./Messages";
import TheDate from "./state/TheDate";
import Counter from "./state/Counter";
import HelloWorld from "./state-drills/HelloWorld";

function App() {
  return (
    <div className="App">
      <h1>Message Master!</h1>
      <div>Hello!!!!</div>
      <Messages name="Messages" unread={0} />
      <Messages name="Notifications" unread={10} />
      <TheDate />
      <Counter count={0} />
      <HelloWorld />
    </div>
  );
}

export default App;
