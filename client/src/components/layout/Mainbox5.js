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
            <Grid item xs={12}>
              &nbsp;
            </Grid>
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
            <Grid container item xs={6}>
              <Grid item xs={1}></Grid>
              <Grid container item xs={10}>
                <Grid item xs={12} align="center">
                  <h1>CS Center</h1>
                </Grid>
                <Grid item xs={6} align="end">
                  <h1>053-766-1234 | </h1>
                </Grid>
                <Grid item xs={6}>
                  <h2>
                    &nbsp;평일 09:00~18:00<br></br>&nbsp;(주말/공휴일 휴뮤)
                  </h2>
                </Grid>
                <Grid container item xs={4} align="center">
                  <Grid container item className="mainbutton" justify="center">
                    <Link to="./map">
                      <Grid item xs={12} align="center">
                        <h2>
                          <i className="fas fa-building"></i>
                        </h2>
                      </Grid>
                      <Grid item xs={12} align="center">
                        <h2>회사소개</h2>
                      </Grid>
                    </Link>
                  </Grid>
                </Grid>

                <Grid container item xs={4} align="center">
                  <Grid container item className="mainbutton" justify="center">
                    <Link to="./intro">
                      <Grid item xs={12} align="center">
                        <h2>
                          <i className="fas fa-question"></i>
                        </h2>
                      </Grid>
                      <Grid item xs={12} align="center">
                        <h2>온라인 상담 및 문의</h2>
                      </Grid>
                    </Link>
                  </Grid>
                </Grid>
                <Grid container item xs={4} align="center">
                  <Grid container item className="mainbutton" justify="center">
                    <Link to="./map">
                      <Grid item xs={12} align="center">
                        <h2>
                          <i className="fas fa-map-marker-alt"></i>
                        </h2>
                      </Grid>
                      <Grid item xs={12} align="center">
                        <h2>오시는 길</h2>
                      </Grid>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid container className="main5small">
            <Grid item xs={12}>
              &nbsp;
            </Grid>
            <Grid container item xs={12} alignItems="center">
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
            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
              <p>&nbsp;</p>
            </Grid>
            <Grid container item xs={12}>
              <Grid container item xs={12}>
                <Grid item xs={12} align="center">
                  <h1>CS Center</h1>
                </Grid>
                <Grid item xs={6} align="end">
                  <h2>053-766-1234 </h2>
                </Grid>
                <Grid item xs={6}>
                  <p>
                    &nbsp;|&nbsp;평일 09:00~18:00<br></br>
                    &nbsp;&nbsp;(주말/공휴일 휴뮤)
                  </p>
                </Grid>
                <Grid container item xs={4} align="center">
                  <Grid container item className="mainbutton" justify="center">
                    <Link to="./map">
                      <Grid item xs={12} align="center">
                        <h2>
                          <i className="fas fa-building"></i>
                        </h2>
                      </Grid>
                      <Grid item xs={12} align="center">
                        <h2>회사소개</h2>
                      </Grid>
                    </Link>
                  </Grid>
                </Grid>

                <Grid container item xs={4} align="center">
                  <Grid container item className="mainbutton" justify="center">
                    <Link to="./intro">
                      <Grid item xs={12} align="center">
                        <h2>
                          <i className="fas fa-question"></i>
                        </h2>
                      </Grid>
                      <Grid item xs={12} align="center">
                        <h3>온라인 상담 및 문의</h3>
                      </Grid>
                    </Link>
                  </Grid>
                </Grid>
                <Grid container item xs={4} align="center">
                  <Grid container item className="mainbutton" justify="center">
                    <Link to="./map">
                      <Grid item xs={12} align="center">
                        <h2>
                          <i className="fas fa-map-marker-alt"></i>
                        </h2>
                      </Grid>
                      <Grid item xs={12} align="center">
                        <h2>오시는 길</h2>
                      </Grid>
                    </Link>
                  </Grid>
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
