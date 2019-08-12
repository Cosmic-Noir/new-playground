import React from "react";

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      who: "world"
    };
  }

  handleButtonClick = word => {
    // let newWho;
    this.setState({ who: word });
  };

  render() {
    return (
      <div>
        <p>Hello, {this.state.who}</p>
        <button onClick={() => this.handleButtonClick("world")}>World</button>
        <button onClick={() => this.handleButtonClick("friend")}>Friend</button>
        <button onClick={() => this.handleButtonClick("react")}>React</button>
      </div>
    );
  }
}

export default HelloWorld;
