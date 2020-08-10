import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';

class Postpiece extends Component {
  render() {
    return (
      <li key={uuid()}>
        <Link to={`./noticepost/${this.props.data._id}`}>
          <p>{this.props.data.title}</p>
          <p>{this.props.data.authorName}</p>
          <p>{this.props.data.timestamp}</p>
        </Link>
      </li>
    );
  }
}

export default Postpiece;
