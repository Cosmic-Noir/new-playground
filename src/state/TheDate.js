import React from "react";

class TheDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datetime: new Date()
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ datetime: new Date() });
    }, 1000);
  }
  componentWillUnmount() {
    // cleans up interval when component is removed from the DOM
    clearInterval(this.interval);
  }
  render() {
    return <div>{this.state.datetime.toLocaleString()}</div>;
  }
}

export default TheDate;
