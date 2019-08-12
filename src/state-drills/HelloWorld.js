import React from "react";

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "hello"
    };
  }
  render() {
    return <div>{this.state.greeting} </div>;
  }
}

export default HelloWorld;
