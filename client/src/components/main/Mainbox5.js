import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Postpiecemain from './Postpiecemain';
import uuid from 'uuid';
import Paper from '@material-ui/core/Paper';

class Mainbox4 extends Component {
  constructor(props) {
    super(props);
    this.state = { data: { data: [0, 1, 2, 3, 4] } };
  }
  componentDidMount() {
    axios.get('/api/v1/notices?page=1&limit=3').then((response) => {
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
            <Grid item xs={1}></Grid>

            <Grid item xs={6} alignItems="center">
              <Paper elevation={0} style={{ padding: '1vw' }}>
                <Grid item xs={3}>
                  <Link to="./notice">
                    <h1>공지사항</h1>
                  </Link>
                </Grid>
                <Grid container item xs={9}>
                  {list}
                </Grid>
              </Paper>
            </Grid>
            <Grid container item xs={4}>
              <Grid style={{ borderBottom: '0.02vh solid black' }} item xs={12}>
                <h1>전화 상담</h1>
              </Grid>
              <Grid item xs={12}>
                <h3>아래의 번호로 전화 주시면 친절히 상담해드리겠습니다.</h3>
                <h2> TEL : 053-766-0411 </h2>
                <h2> H.P : 010-4016-8890 </h2>
              </Grid>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid container>
            <Grid
              container
              item
              xs={12}
              alignItems="center"
              className="mainbox5small"
            >
              <Grid item xs={12} className="noticeborder">
                <div></div>
              </Grid>
              <Grid item xs={3}>
                <Link to="./notice">
                  <h1>공지사항</h1>
                </Link>
              </Grid>
              <Grid container item xs={9}>
                {list}
              </Grid>
              <Grid itemx xs={12}>
                &nbsp;
              </Grid>
              <Grid itemx xs={12}>
                &nbsp;
              </Grid>
            </Grid>
            <Grid
              container
              item
              xs={12}
              spaicing={3}
              className="mainbox5small2"
            >
              <Grid item container xs={4} align="center" className="hibsmall">
                <Link to="./notice">
                  <Grid container>
                    <Grid item xs={12} align="center" className="hibyehsmall">
                      공지 사항
                    </Grid>
                    <Grid>&nbsp;</Grid>
                    <Grid item xs={12} align="center">
                      <i class="fas fa-bullhorn"></i>
                    </Grid>
                  </Grid>
                </Link>
              </Grid>
              <Grid container item xs={4} align="center" className="hibsmall">
                <Link to="./map">
                  <Grid container>
                    <Grid item xs={12} align="center" className="hibyehsmall">
                      오시는 길
                    </Grid>
                    <Grid>&nbsp;</Grid>

                    <Grid item xs={12} align="center">
                      <i class="fas fa-map-signs"></i>{' '}
                    </Grid>
                  </Grid>
                </Link>
              </Grid>

              <Grid item container xs={4} align="center" className="hibsmall">
                <Link to="./intro">
                  <Grid container>
                    <Grid item xs={12} align="center" className="hibyehsmall">
                      회사 소개
                    </Grid>
                    <Grid>&nbsp;</Grid>
                    <Grid item xs={12} align="center">
                      <i class="fas fa-store"></i>
                    </Grid>
                  </Grid>
                </Link>
              </Grid>
              <Grid
                container
                item
                xs={12}
                style={{ padding: '3vw', fontSize: '2.4vw' }}
              >
                <Grid
                  style={{ borderBottom: '0.02vh solid black' }}
                  item
                  xs={12}
                >
                  <h2>전화 상담</h2>
                </Grid>
                <Grid item xs={12}>
                  <h4>아래의 번호로 전화 주시면 친절히 상담해드리겠습니다.</h4>
                  <h3> TEL : 053-766-0411 </h3>
                  <h3> H.P : 010-4016-8890 </h3>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
      </Fragment>
    );
  }
}

export default Mainbox4;
