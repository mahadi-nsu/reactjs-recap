import React from "react";

export default function Card(props) {
  return (
    <div style={{ margin: "1em" }}>
      <img width="75" src={props.avatar_url} alt="name" />
      <div style={{ display: "inline-block", marginLeft: 10 }}>
        <div>{props.name}</div>
        <div>{props.company}</div>
      </div>
    </div>
  );
}
