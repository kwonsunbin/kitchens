import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Postpiece from './Postpiece';
import uuid from 'react-uuid';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';

class Noticebox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
      total: 1,
      page: 1,
    };
    this.handleDecrease = this.handleDecrease.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);
  }
  componentDidMount() {
    axios
      .get('/api/v1/notices', {
        params: { page: 1, limit: 10 },
      })
      .then((response) => {
        this.setState({ data: response.data });
      });
    axios.get('/api/v1/notices').then((response) => {
      const totalpage = Math.ceil(response.data.count / 10);
      this.setState({ total: totalpage });
    });
  }

  handleIncrease() {
    var page = this.state.page;
    if (page + 1 > this.state.total) {
      return;
    }
    page = page + 1;
    axios.get(`/api/v1/notices?page=${page}&limit=10`).then((res) => {
      this.setState({ data: res.data.data[0], page: page });
    });
  }
  handleDecrease() {
    var page = this.state.page;
    if (page === 1) {
      return;
    }
    page = page - 1;
    axios.get(`/api/v1/notices?page=${page}&limit=10`).then((res) => {
      this.setState({ data: res.data.data[0], page: page });
    });
  }
  render() {
    const list = this.state.data.data.map((piece) => {
      return <Postpiece data={piece} key={uuid()} />;
    });

    return (
      <Fragment>
        <Hidden smDown>
          <Grid container className="pagebox">
            <Grid container className="forbg">
              <Grid item xs={1}></Grid>
              <Grid item xs={10} align="center">
                <h1>공지 사항</h1>
              </Grid>
              <Grid item xs={1}></Grid>

              <Grid item xs={1}></Grid>

              <Grid item xs={10} align="center">
                <p>키친스의 공지사항 게시판입니다.</p>
                <p>&nbsp;</p>
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid container item xs={8} className="postshowbox">
              <Grid item xs={12}>
                <h1>공지 게시판</h1>
              </Grid>

              <Grid container item xs={12} className="bar">
                <Grid container item className="noticebar">
                  <Grid item xs={7} align="center">
                    <p>제목</p>
                  </Grid>
                  <Grid item xs={2} align="center">
                    <p>작성자</p>
                  </Grid>
                  <Grid item xs={3} align="center">
                    <p>작성일</p>
                  </Grid>
                </Grid>
              </Grid>

              {list}

              <Grid container item xs={12} className="pagination-notice">
                <Grid item xs={12}>
                  &nbsp;
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={1}>
                  <div className="consultbutton3" onClick={this.handleDecrease}>
                    이전
                  </div>
                </Grid>

                <Grid item xs={2} align="center">
                  <p>
                    {this.state.page} &nbsp;/ &nbsp;{this.state.total}
                  </p>
                </Grid>

                <Grid item xs={1} align="center">
                  <div className="consultbutton3" onClick={this.handleIncrease}>
                    다음
                  </div>
                </Grid>
              </Grid>
              <Grid item xs={4}></Grid>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid container className="pageboxsmall">
            <Grid container className="forbg">
              <Grid item xs={1}></Grid>
              <Grid item xs={10} align="center">
                <h1>공지 사항</h1>
              </Grid>
              <Grid item xs={1}></Grid>

              <Grid item xs={1}></Grid>

              <Grid item xs={10} align="center">
                <p>키친스의 공지사항 게시판입니다.</p>
                <p>&nbsp;</p>
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
            <Grid container item xs={12} className="postshowboxsmall">
              <Grid item xs={12}>
                <h1>공지 게시판</h1>
              </Grid>

              <Grid container item xs={12} className="bar">
                <Grid container item className="noticebar">
                  <Grid item xs={7} align="center">
                    <p>제목</p>
                  </Grid>
                  <Grid item xs={2} align="center">
                    <p>작성자</p>
                  </Grid>
                  <Grid item xs={3} align="center">
                    <p>작성일</p>
                  </Grid>
                </Grid>
              </Grid>

              {list}

              <Grid container item xs={12} className="pagination-notice">
                <Grid item xs={12}>
                  &nbsp;
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={2}>
                  <div
                    className="consultbutton3small"
                    onClick={this.handleDecrease}
                  >
                    이전
                  </div>
                </Grid>
                <Grid item xs={2} align="center">
                  <p>
                    {this.state.page} &nbsp;/ &nbsp;{this.state.total}
                  </p>
                </Grid>

                <Grid item xs={2} align="center">
                  <div
                    className="consultbutton3small"
                    onClick={this.handleIncrease}
                  >
                    다음
                  </div>
                </Grid>
              </Grid>
              <Grid item xs={3}></Grid>
            </Grid>
          </Grid>
        </Hidden>
      </Fragment>
    );
  }
}

export default Noticebox;
