import React from "react";
import "./App.css";

// components
import CardList from "./components/CardList";

let data = [
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
];

function App() {
  return <CardList cards={data} />;
}

export default App;
