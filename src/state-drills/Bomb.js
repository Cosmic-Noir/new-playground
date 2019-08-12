import React from "react";

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    setInterval(() => {
      let newCount = this.state.count + 1;
      console.log(newCount);
      this.setState({ count: newCount });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  bombNoise() {
    let word;
    if (this.state.count % 8 == 0) {
      word = "BOOM!!!";
      clearInterval(this.interval);
    } else if (this.state.count % 2 == 0) {
      word = "tick.";
    } else {
      word = "tock.";
    }
    return word;
  }

  render() {
    return (
      <div>
        <p>{this.bombNoise()}</p>
      </div>
    );
  }
}

export default Bomb;
