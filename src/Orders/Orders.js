import React, { Component } from "react";
import "./Orders.css"
import Basketball from "./Basketball.png";
import Football from "./Football.png"; 
import Cheese from "./Cheese.png"; 
import Wine from "./Wine.png"; 
import styled from 'styled-components';

const OrangeHeader = styled.h1`
font-size: 35px;
color: black;
text-shadow: -2px 0 #FFB443, 0 2px #FFB443, 2px 0 #FFB443, 0 -2px #FFB443;
`

class Orders extends Component {
  render() {
    return (
      <div class="Orders">
        <OrangeHeader>Orders</OrangeHeader>
        <h2>Order# 1234567890</h2>
        <p>Expected Delivery Date: 9/14/2019</p>
        <img class="Basketball2" src={Basketball} alt=""/>
        <img class="Football2" src={Football} alt=""/>
        <br></br>
        <br></br>
        <h2>Order# 1234567891</h2>
        <p>Expected Delivery Date: 9/16/2019</p>
        <img class="Cheese2" src={Cheese} alt=""/>
        <img class="Wine2" src={Wine} alt=""/>
      </div>
    );
  }
}
 
export default Orders;