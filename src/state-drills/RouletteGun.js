import React from "react";

class RouletteGun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      chamber: null,
      spinningTheChamber: false,
      bulletInChamber: 8
    };
  }

  randomNum = () => {
    let random = Math.floor(Math.random() * 9);
    this.setState({ chamber: random });
    console.log("random chamber selected is " + random);
    if (random === this.state.bulletInChamber) {
      this.setState({ message: "BANG!!!" });
    } else {
      this.setState({ message: "You're safe!" });
    }
  };

  handleButtonClick = () => {
    console.log("a button clicks");
    this.setState({
      spinningTheChamber: true,
      message: "Spinning the chamber and pulling the trigger...!"
    });
    setTimeout(this.randomNum(), 3000);
  };

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <button onClick={() => this.handleButtonClick()}>
          Pull the trigger!
        </button>
      </div>
    );
  }
}

export default RouletteGun;
