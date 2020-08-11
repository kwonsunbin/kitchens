import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import axios from 'axios';
class Mainbox2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: '/api/v1/photos/getfs',
    }).then((res) => {
      this.setState({ files: res.data.data });
    });
  }

  render() {
    const files = this.state.files;

    const parts = files.map((f) => {
      return (
        <Link
          to={'./gallerypost/' + f}
          className="maingalleryphoto"
          key={uuid()}
        >
          <img src={'./uploads/' + f} alt="photos" width="100%" height="100%" />
        </Link>
      );
    });

    return (
      <div className="mainbox2">
        <div className="linkbox">
          <div className="linkbox-tel">
            <h3>전화 상담 및 문의</h3>
            <p>
              <strong> 사번 </strong> : 053-951-2476 <br></br>{' '}
              <strong>핸드폰</strong> : 010-2321-2551
            </p>
          </div>
          <Link to="./draft" className="linkbox1">
            <h3>온라인 상담 및 문의</h3>
            <p>바로가기</p>
          </Link>
          <Link to="./intro" className="linkbox2">
            <h3>회사 소개</h3>
            <p>바로가기</p>
          </Link>
        </div>

        <div className="gallery">
          <div className="title">
            <Link to="./gallery" className="title-title">
              꾸밈 사례
            </Link>
            <Link to="./gallery" className="more">
              더보기
            </Link>
          </div>

          <div className="products">
            <ul>
              <li>{parts[parts.length - 1]}</li>
              <li>{parts[parts.length - 2]}</li>
              <li>{parts[parts.length - 3]}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Mainbox2;
