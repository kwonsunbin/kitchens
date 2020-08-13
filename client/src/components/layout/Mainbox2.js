import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

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
      <Grid container className="mainbox2">
        <Grid container item xs={4} className="linkbox">
          <div className="linkbox-tel">
            <h2>전화 상담 및 문의</h2>
            <p>
              <strong>키친스 매장</strong> : 053-777-7777<br></br>{' '}
              <strong>휴대폰</strong> : 010-7777-7777
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
        </Grid>

        <Grid container item xs={8} className="gallery">
          <Grid item xs={2}>
            <Link to="./gallery" className="title-title">
              꾸밈 사례
            </Link>
          </Grid>
          <Grid item xs={8}></Grid>
          <Grid item xs={2} align="end">
            <Link to="./gallery" className="more">
              더보기
            </Link>
          </Grid>

          <div className="products">
            <ul>
              <li>{parts[parts.length - 1]}</li>
              <li>{parts[parts.length - 2]}</li>
              <li>{parts[parts.length - 3]}</li>
            </ul>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default Mainbox2;
