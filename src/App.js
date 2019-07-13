import React, { Component } from "react";

//components
import Button from "./components/Button";
import Counter from "./components/Counter";

class App extends Component {
  state = {
    counter: 0
  };

  incrementCounter = incremenetvalue => {
    this.setState({
      counter: this.state.counter + incremenetvalue
    });
  };

  render() {
    return (
      <div>
        <Button incremenetvalue={1} onClickFunction={this.incrementCounter} />
        <Button incremenetvalue={2} onClickFunction={this.incrementCounter} />
        <Button incremenetvalue={5} onClickFunction={this.incrementCounter} />
        <Button incremenetvalue={10} onClickFunction={this.incrementCounter} />
        <Counter counter={this.state.counter} />
      </div>
    );
  }
}

export default App;
