import React, { Component } from "react";
import "./Account.css";
 
class Account extends Component {
  render() {
    return (
      <div class="Account">
        <h1>Your Account</h1>
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