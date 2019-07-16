import React from "react";

import Card from "./Card";

// let data = [
//   {
//     name: "Mahadi Hassan",
//     avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
//     comapny: "facebook"
//   },

//   {
//     name: "Tahsin Hassan",
//     avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
//     comapny: "Google"
//   }
// ];
export default function CardList(props) {
  return (
    <div>
      {props.cards.map(card => (
        <Card {...card} />
      ))}
    </div>
  );
}

//comment : previoulsy used : card.name , card.avatar_url , card.companyName
// TODO : have to go through object and array spread operator.
