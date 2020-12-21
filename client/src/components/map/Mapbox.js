import React, { Component, Fragment } from 'react';
import { RenderAfterNavermapsLoaded } from 'react-naver-maps';
import Mapboxnaver from './Mapboxnaver';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

class Mapbox2 extends Component {
  render() {
    return (
      <Fragment>
        <Hidden smDown>
          <Grid container className="pagebox">
            <Grid container className="forbg">
              <Grid item xs={1}></Grid>
              <Grid item xs={10} align="center">
                <h1>오시는 길</h1>
              </Grid>
              <Grid item xs={1}></Grid>

              <Grid item xs={1}></Grid>

              <Grid item xs={10} align="center">
                <p>
                  보다 편리하고 빠르게 찾아오실 수 있도록 오시는 길을 안내해
                  드리겠습니다.
                </p>
                <h2>대구시 북구 침산남로 48</h2>

                <p>&nbsp;</p>
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={7} className="mapmainbox">
              <RenderAfterNavermapsLoaded
                ncpClientId={`${process.env.naverClientKey}`} // 자신의 네이버 계정에서 발급받은 Client ID
                error={<p>Maps Load Error</p>}
                loading={<p>Maps Loading...</p>}
              >
                <Mapboxnaver />
              </RenderAfterNavermapsLoaded>
            </Grid>

            <Grid item xs={3}>
              <div>
                <p>&nbsp;</p>

                <p>&nbsp;</p>
                <h2>
                  <i className="fas fa-car"></i> 자가용 이용 시
                </h2>
                <p> 건물 앞 지상 전용 주차장 이용</p>
                <h2>
                  <i className="fas fa-subway"></i> 지하철 3호선 이용 시
                </h2>
                <p>
                  원대역 1번 출구 700m 도보 10분 <br></br> 북구청역 2번 출구
                  750m 도보 11분
                </p>
                <h2>
                  <i class="fas fa-bus"></i> 버스 이용 시
                </h2>
                <p>
                  719, 730, 순환 2-1 <br></br>: 북침산치안센터앞 정류장 하차 후
                  도보 2분
                </p>

                <p></p>
                <p>&nbsp;</p>

                <p>&nbsp;</p>
              </div>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid container className="pageboxsmall">
            <Grid container className="forbgsmall">
              <Grid item xs={1}></Grid>
              <Grid item xs={10} align="center">
                <h1>오시는 길</h1>
              </Grid>
              <Grid item xs={1}></Grid>

              <Grid item xs={1}></Grid>

              <Grid item xs={10} align="center">
                <p>
                  보다 편리하고 빠르게 찾아오실 수 있도록 오시는 길을 안내해
                  드리겠습니다.
                </p>
                <h2>대구시 북구 침산남로 48</h2>

                <p>&nbsp;</p>
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
            <Grid item xs={12} className="mapmainbox">
              <RenderAfterNavermapsLoaded
                ncpClientId={`${process.env.naverClientKey}`} // 자신의 네이버 계정에서 발급받은 Client ID
                error={<p>Maps Load Error</p>}
                loading={<p>Maps Loading...</p>}
              >
                <Mapboxnaver />
              </RenderAfterNavermapsLoaded>
            </Grid>
            <Grid item xs={12}>
              <div>
                <p>&nbsp;</p>

                <p>&nbsp;</p>
                <h2>
                  <i className="fas fa-car"></i> 자가용 이용 시
                </h2>
                <p> 건물 앞 지상 전용 주차장 이용</p>
                <h2>
                  <i className="fas fa-subway"></i> 지하철 3호선 이용 시
                </h2>
                <p>
                  원대역 1번 출구 700m 도보 10분 <br></br> 북구청역 2번 출구
                  750m 도보 11분
                </p>
                <h2>
                  <i class="fas fa-bus"></i> 버스 이용 시
                </h2>
                <p>
                  719, 730, 순환 2-1 <br></br>: 북침산치안센터앞 정류장 하차 후
                  도보 2분
                </p>

                <p></p>
                <p>&nbsp;</p>

                <p>&nbsp;</p>
              </div>
            </Grid>
          </Grid>
        </Hidden>
      </Fragment>
    );
  }
}

export default Mapbox2;
