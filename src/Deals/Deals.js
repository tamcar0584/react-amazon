import React, { Component } from "react";
import "./Deals.css";
import Robe from "./Robe.png";

class Deals extends Component {
  render() {
    return (
      <div class="Deals">
        <h1>Super Plush Robe</h1>
        <img class="Robe2" src={Robe} alt=""/>
        <p>This super plush robe is great for all occasions!</p>
        <h2>$30.00</h2>
      </div>
    );
  }
}
 
export default Deals;