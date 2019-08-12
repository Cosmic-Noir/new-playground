import React from "react";

class TheDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datetime: new Date(),
      step: 1
    };
    console.log("constructor");
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.interval = setInterval(() => {
      console.log("setInterval");
      this.setState({ datetime: new Date() });
    }, 1000);
  }
  componentWillUnmount() {
    // cleans up interval when component is removed from the DOM
    clearInterval(this.interval);
  }
  render() {
    console.log("render");
    return <div>{this.state.datetime.toLocaleString()}</div>;
  }
}

export default TheDate;
