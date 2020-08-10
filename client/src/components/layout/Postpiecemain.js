import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';

class Postpiecemain extends Component {
  render() {
    return (
      <li key={uuid()}>
        <Link to="./noticepost/:id" className="postpiece-main">
          <p>{this.props.data.title}</p>
          <p>{this.props.data.timestamp}</p>
        </Link>
      </li>
    );
  }
}

export default Postpiecemain;
