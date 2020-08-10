import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import uuid from 'uuid';

class Gallerybox2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'http://localhost:8080/api/v1/photos/getfs',
    }).then((res) => {
      this.setState({ files: res.data.data });
    });
  }

  render() {
    const files = this.state.files;

    const parts = files.map((f) => {
      return (
        <Link to={'./gallerypost/' + f} className="productbox" key={uuid()}>
          <img src={'./uploads/' + f} alt="photos" width="100%" />
        </Link>
      );
    });

    return (
      <div>
        <div className="gallerymainbox">
          <div className="navbar-column">
            <h2>꾸밈 사례</h2>
            <ul>
              <li>
                <Link to="./gallery">갤러리</Link>
              </li>
            </ul>
          </div>

          <div className="photobox">
            <div className="photoboxheader">
              <h1>갤러리</h1>
            </div>
            <div className="photoboxmain">{parts}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallerybox2;
