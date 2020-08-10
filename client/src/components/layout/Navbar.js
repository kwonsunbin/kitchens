import React, { Component } from 'react';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = function () {
    if (this.state.isClicked) {
      this.setState({ isClicked: false });
    } else {
      this.setState({ isClicked: true });
    }
  };

  render() {
    return (
      <nav className="navbar-row" onClick={this.handleClick}>
        <div className="logo">
          <Link to="../">Kitchens </Link>
        </div>
        <div className="links" id="fordropdown">
          <p>회사 소개</p>
          <p>꾸밈 사례</p>
          <p>고객지원</p>
        </div>
        <Dropdown clicked={this.state.isClicked} />
      </nav>
    );
  }
}

export default Navbar;
