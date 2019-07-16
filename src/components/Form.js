import React, { Component } from "react";

export default class Form extends Component {
  state = {
    userName: ""
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.userName);
  };

  render() {
    console.log(this.state.userName);
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          type="text"
          placeholder="Github Username"
        />

        {/* <input
          ref={input => (this.userAnotherInput = input)}
          type="text"
          placeholder="Github Username"
        /> */}
        <button type="submit">Add card</button>
      </form>
    );
  }
}
