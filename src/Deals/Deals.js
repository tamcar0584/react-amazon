import React, { Component } from "react";
import "./Deals.css";
import styled from 'styled-components';
import Robe from "./Robe.png";

const OrangeHeader = styled.h1`
font-size: 35px;
color: black;
text-shadow: -2px 0 #FFB443, 0 2px #FFB443, 2px 0 #FFB443, 0 -2px #FFB443;
`

class Deals extends Component {
  render() {
    return (
      <div class="Deals">
        <OrangeHeader>Super Plush Robe</OrangeHeader>
        <img class="Robe2" src={Robe} alt=""/>
        <p>This super plush robe is great for all occasions!</p>
        <h2>$30.00</h2>
      </div>
    );
  }
}
 
export default Deals;