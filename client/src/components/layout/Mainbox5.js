import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Postpiecemain from './Postpiecemain';
import uuid from 'uuid';
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
            <Grid container item xs={5} alignItems="center">
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
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid container item xs={6} spaicing={3}>
              <Grid item xs={3}></Grid>
              <Grid item container xs={3} className="hib">
                <Link to="./notice">
                  <Grid container>
                    <Grid item xs={12} align="center" className="hibyeh">
                      공지 사항
                    </Grid>
                    <Grid>&nbsp;</Grid>
                    <Grid item xs={12} align="center">
                      <i className="far fa-bell"></i>
                    </Grid>
                  </Grid>
                </Link>
              </Grid>
              <Grid container item xs={3} className="hib">
                <Link to="./map">
                  <Grid container>
                    <Grid item xs={12} align="center" className="hibyeh">
                      오시는 길
                    </Grid>
                    <Grid>&nbsp;</Grid>

                    <Grid item xs={12} align="center">
                      <i className="fas fa-map-marker-alt"></i>
                    </Grid>
                  </Grid>
                </Link>
              </Grid>

              <Grid item container xs={3} className="hib">
                <Link to="./intro">
                  <Grid container>
                    <Grid item xs={12} align="center" className="hibyeh">
                      회사 소개
                    </Grid>
                    <Grid>&nbsp;</Grid>
                    <Grid item xs={12} align="center">
                      <i className="fas fa-building"></i>
                    </Grid>
                  </Grid>
                </Link>
              </Grid>
            </Grid>
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
            </Grid>
          </Grid>
        </Hidden>
      </Fragment>
    );
  }
}

export default Mainbox4;
