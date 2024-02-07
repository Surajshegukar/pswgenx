import React, { Component } from 'react'
import './Navbar.css';
export default class NavBar extends Component {
  render() {
    return (
      <div className = "Navbar-main">
      <div className="Nav_left">
          Image
      </div>
      <div className="Nav_center">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
      </div>
      <div className="Nav_right">
          <input type="button" value="Let's Talk" />
      </div>
    </div>
    )
  }
}
