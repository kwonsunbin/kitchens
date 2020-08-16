import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Postpiecemain from './Postpiecemain';
import axios from 'axios';
import uuid from 'react-uuid';
import { RenderAfterNavermapsLoaded } from 'react-naver-maps';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

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
      <Fragment>
        <Hidden smDown>
          <Grid container>
            <Grid container item xs={5} className="notice">
              <Grid container item xs={12} className="notice-title">
                <Grid item xs={6}>
                  <Link to="./notice" className="rhdwltkgkd">
                    공지사항
                  </Link>
                </Grid>
                <Grid item xs={6} align="right">
                  <Link to="./notice" className="more">
                    더보기
                  </Link>
                </Grid>
              </Grid>

              {list}
            </Grid>

            <Grid container item xs={7} className="way">
              <Grid container item className="hi" xs={6}>
                <RenderAfterNavermapsLoaded
                  ncpClientId={'vw4iuq2zy5'} // 자신의 네이버 계정에서 발급받은 Client ID
                  error={<p>Maps Load Error</p>}
                  loading={<p>Maps Loading...</p>}
                >
                  <Mapbox2naver />
                </RenderAfterNavermapsLoaded>
              </Grid>

              <Grid container item className="bye" xs={6}>
                <Grid container item xs={12} className="way-desc">
                  <Link to="./map" className="way-description">
                    <Grid>
                      <h2 className="mz">오시는 길</h2>
                    </Grid>
                    <Grid>
                      <h3 className="m1">대구광역시 북구 침산남로 48 </h3>
                      지번 : 노원동 1가 9-15 (우) 41589
                    </Grid>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid container className="smallmainbox3">
            <Grid container item xs={12} className="noticesmall">
              <Grid container item xs={12} className="notice-title">
                <Grid item xs={6}>
                  <Link to="./notice" className="rhdwltkgkdsmall">
                    공지사항
                  </Link>
                </Grid>
                <Grid item xs={6} align="right"></Grid>
              </Grid>

              {list}
            </Grid>

            <Grid container item xs={12} className="way">
              <Grid container item className="hi" xs={6}>
                <RenderAfterNavermapsLoaded
                  ncpClientId={'vw4iuq2zy5'} // 자신의 네이버 계정에서 발급받은 Client ID
                  error={<p>Maps Load Error</p>}
                  loading={<p>Maps Loading...</p>}
                >
                  <Mapbox2naver />
                </RenderAfterNavermapsLoaded>
              </Grid>

              <Grid container item className="bye" xs={6}>
                <Grid container item xs={12} className="way-descsmall">
                  <Link to="./map" className="way-description">
                    <Grid>
                      <h2>오시는 길</h2>
                      <p>
                        <br></br>
                      </p>
                    </Grid>
                    <Grid>
                      <h3>대구광역시 북구 침산남로 48 </h3>
                      <p>지번 : 노원동 1가 9-15 41589</p>
                      <p>
                        <br></br>
                        <br></br>
                        <br></br>

                        <br></br>

                        <br></br>
                      </p>
                      <p></p>
                      <p></p>
                    </Grid>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
      </Fragment>
    );
  }
}

export default Mainbox3;
