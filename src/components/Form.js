import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Github Username" />
        <button type="submit">Add card</button>
      </form>
    );
  }
}
