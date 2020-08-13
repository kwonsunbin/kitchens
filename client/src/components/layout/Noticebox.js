import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Postpiece from './Postpiece';
import uuid from 'react-uuid';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

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
      <Grid container>
        <Grid container item xs={2} direction="column">
          <Grid item align="center">
            <h2>고객지원</h2>
          </Grid>
          <Grid item align="center">
            <Link to="./notice">공지사항</Link>
          </Grid>
          <Grid item align="center">
            <Link to="./draft">상담 및 문의</Link>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
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
            <Grid item xs={4}></Grid>
            <Grid item xs={1}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <p onClick={this.handleDecrease}> 이전 </p>
              </Box>
            </Grid>
            <Grid item xs={2} align="center">
              <p>
                {this.state.page} &nbsp;/ &nbsp;{this.state.total}
              </p>
            </Grid>

            <Grid item xs={1} align="center">
              <p onClick={this.handleIncrease}> 다음 </p>
            </Grid>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Noticebox;
