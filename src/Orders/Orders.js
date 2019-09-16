import React, { Component } from "react";
import "./Orders.css"
import Basketball from "./Basketball.png";
import Football from "./Football.png"; 
import Cheese from "./Cheese.png"; 
import Wine from "./Wine.png"; 

class Orders extends Component {
  render() {
    return (
      <div class="Orders">
        <h1>Orders</h1>
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