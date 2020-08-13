import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Postpiecemain from './Postpiecemain';
import axios from 'axios';
import uuid from 'react-uuid';
import { RenderAfterNavermapsLoaded } from 'react-naver-maps';
import Grid from '@material-ui/core/Grid';

import Mapbox2naver from './Mapboxnaver';

class Mainbox3 extends Component {
  constructor(props) {
    super(props);
    this.state = { data: { data: [0, 1, 2, 3, 4] } };
  }
  componentDidMount() {
    axios.get('/api/v1/notices?page=1&limit=5').then((response) => {
      this.setState({ data: response.data });
    });
  }

  render() {
    const list = this.state.data.data.map((piece) => {
      return <Postpiecemain data={piece} key={uuid()} />;
    });

    return (
      <Grid container className="mainbox3">
        <Grid container item xs={5} className="notice">
          <div className="notice-title">
            <Link to="./notice">공지사항</Link>
            <Link to="./notice" className="more">
              더보기
            </Link>
          </div>

          <ul>{list}</ul>
        </Grid>
        <Grid container item xs={7} className="way">
          <Grid container item xs={12}>
            <RenderAfterNavermapsLoaded
              ncpClientId={'vw4iuq2zy5'} // 자신의 네이버 계정에서 발급받은 Client ID
              error={<p>Maps Load Error</p>}
              loading={<p>Maps Loading...</p>}
            >
              <Mapbox2naver />
            </RenderAfterNavermapsLoaded>
          </Grid>
          <Grid container item xs={12}>
            <Grid container item xs={12} className="way-desc">
              <Link to="./map" className="way-description">
                <Grid>
                  <h2>오시는 길</h2>
                </Grid>
                <Grid>
                  <h3>대구광역시 북구 침산남로 48 </h3>
                </Grid>
                <Grid>
                  <p>지번 : 노원동 1가 9-15 (우) 41589</p>
                </Grid>
              </Link>
            </Grid>
            <Grid container item xs={12} className="phonenum">
              <Grid xs={12}>
                <h2>연락처 및 이메일</h2>
              </Grid>
              <Grid xs={12}>
                <p>
                  키친스 매장 : 053-777-7777 <br></br> 휴대폰 : 010-7777-7777
                </p>
              </Grid>
              <Grid xs={12}>
                <p>이메일 : kmshihi@gmail.com</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Mainbox3;
