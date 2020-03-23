import React, { Component } from "react";
import "./Card.css";
import consultants from "./data/consultants.json";

class Card extends Component {
  render() {
    console.log(consultants[0]);
    return (
      <div className="panel">
        <div className="avatar" />
      </div>
    );
  }
}

export default Card;
