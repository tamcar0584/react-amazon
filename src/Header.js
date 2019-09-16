import React, { PureComponent } from "react";
import "./header.css";
import Amazon_logo from "./Amazon_logo.png";
import Search_logo from "./Search.png";

export default class Header extends PureComponent {
  render() {
    return (
      <div>
      <form>
      <img
          src={Amazon_logo}
          height="29px"
          width="100px"
          alt=""
        />
        <input type="text" id="filter" placeholder="Search for..."/>
        <button type="button">
            <img src={Search_logo} 
            height="29px"
            width="29px"
            alt="Search"/>
        </button>
        </form>
      </div>
    );
  }
}