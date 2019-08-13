import React from "react";

class Accordian extends React.Component {
  static defaultProps = {
    sections: []
  };

  state = {
    currentIndex: 0
  };

  handleButtonClick(index) {
    this.setState({ currentIndex: index });
  }

  renderContent() {
    const currentContent = this.props.sections[this.state.currentIndex];
    return <p>{currentContent.content}</p>;
  }

  renderLi() {
    return this.props.sections.map((section, index) => (
      <button key={index} onClick={() => this.handleButtonClick(index)}>
        {section.title}
      </button>
    ));
  }

  render() {
    return (
      <ul>
        {this.renderLi()}
        {!!this.props.sections.length && this.renderContent()}
      </ul>
    );
  }
}

export default Accordian;
