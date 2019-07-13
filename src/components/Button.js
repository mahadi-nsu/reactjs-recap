import React, { Component } from "react";

export default class Button extends Component {
  handleClick = () => {
    this.props.onClickFunction(this.props.incremenetvalue);
  };
  render() {
    return (
      <button onClick={this.handleClick}>+{this.props.incremenetvalue}</button>
    );
  }
}
