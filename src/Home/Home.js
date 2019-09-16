import React, { Component } from "react";
import "./Home.css";
import styled from 'styled-components';
import Scroll_1 from "./Scroll_1.jpg";
import Basketball from "./Basketball.png";
import Bed from "./Bed.png";
import Bowling_Ball from "./Bowling_Ball.png";
import Football from "./Football.png";
import Cheese from "./Cheese.png";
import Robe from "./Robe.png";
import Wine from "./Wine.png";

const OrangeHeader = styled.h1`
font-size: 35px;
color: black;
text-shadow: -2px 0 #FFB443, 0 2px #FFB443, 2px 0 #FFB443, 0 -2px #FFB443;
`

class Home extends Component {
  render() {
    return (
      <div>
          <div class="mySlides fade">
            <img class="scroll1" src={Scroll_1} alt=""/>
          </div>
        <br></br>
        <div class="recommendations">
          <OrangeHeader>Recommendations</OrangeHeader>
          <img class="Basketball" src={Basketball} alt=""/>
          <img class="Football" src={Football} alt=""/>
          <img class="Bed" src={Bed} alt=""/>
          <img class="Bowling_Ball" src={Bowling_Ball} alt=""/>
        </div>
        <br></br>
        <div class="list">
          <OrangeHeader>Your List</OrangeHeader>
          <img class="Robe" src={Robe} alt=""/>
          <img class="Cheese" src={Cheese} alt=""/>
          <img class="Wine" src={Wine} alt=""/>
        </div>
      </div>
    );
  }
}

export default Home;