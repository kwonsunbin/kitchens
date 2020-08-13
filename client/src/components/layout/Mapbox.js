import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RenderAfterNavermapsLoaded } from 'react-naver-maps';
import Mapboxnaver from './Mapboxnaver';
import Grid from '@material-ui/core/Grid';

class Mapbox2 extends Component {
  render() {
    return (
      <Grid container>
        <Grid
          container
          item
          xs={2}
          direction="column"
          className="navbar-column"
        >
          <Grid item align="center">
            <h2>회사 소개</h2>
          </Grid>

          <Grid align="center">
            <Link to="./intro">회사 소개</Link>
          </Grid>
          <Grid align="center">
            <Link to="./map">오시는 길</Link>
          </Grid>
        </Grid>

        <Grid item xs={7} className="mapmainbox">
          <RenderAfterNavermapsLoaded
            ncpClientId={'vw4iuq2zy5'} // 자신의 네이버 계정에서 발급받은 Client ID
            error={<p>Maps Load Error</p>}
            loading={<p>Maps Loading...</p>}
          >
            <Mapboxnaver />
          </RenderAfterNavermapsLoaded>
        </Grid>

        <Grid item xs={3}>
          <h1>오시는 길</h1>
          <div>
            <br></br>
            <h2>지하철 3호선 이용 시</h2>
            <p>
              원대역 1번 출구 700m 도보 10분 <br></br> 북구청역 2번 출구 750m
              도보 11분
            </p>
            <h2>버스 이용 시</h2>
            <p>
              719, 730, 순환 2-1 <br></br>: 북침산치안센터앞 정류장 하차 후 도보
              2분
            </p>
            <h2>차량 이용 시</h2>
            <p> 건물 앞 지상 전용 주차장 이용</p>
            <p></p>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default Mapbox2;
