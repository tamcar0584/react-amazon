import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Header from "./Header";
import Home from "./Home/Home";
import Account from "./Account/Account";
import Orders from "./Orders/Orders";
import Deals from "./Deals/Deals";
import Menu from "./Menu.png";

class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
        <Header />
          <ul className="header">
            <li><img class="menu" src={Menu} alt=""/></li>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/deals">Today's Deals</NavLink></li>
            <li><NavLink to="/orders">Your Orders</NavLink></li>
            <li><NavLink to="/account">Your Account</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/deals" component={Deals}/>
            <Route path="/orders" component={Orders}/>
            <Route path="/account" component={Account}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;