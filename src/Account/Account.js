import React, { Component } from "react";
import styled from 'styled-components';
import "./Account.css";

const OrangeHeader = styled.h1`
font-size: 35px;
color: black;
text-shadow: -2px 0 #FFB443, 0 2px #FFB443, 2px 0 #FFB443, 0 -2px #FFB443;
`
 
class Account extends Component {
  render() {
    return (
      <div class="Account">
        <OrangeHeader>Your Account</OrangeHeader>
        <ul class="options">
          <li>Change Password</li>
          <li>Change Address</li>
          <li>Update Payment Info</li>
          <li>Manage Subscriptions</li>
          <li>Manage Your Membership</li>
        </ul>
      </div>
    );
  }
}
 
export default Account;