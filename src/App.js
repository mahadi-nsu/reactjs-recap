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

  addNewCard = cardInfo => {
    // console.log(cardInfo);
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }));
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}
