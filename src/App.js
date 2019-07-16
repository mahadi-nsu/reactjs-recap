import React, { Component } from "react";

// components
import CardList from "./components/CardList";
import Form from "./components/Form";

export default class App extends Component {
  state = {
    cards: [
      {
        name: "Mahadi Hassan",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        company: "facebook"
      },

      {
        name: "Tahsin Hassan",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        company: "Google"
      }
    ]
  };
  render() {
    return <div />;
  }
}
