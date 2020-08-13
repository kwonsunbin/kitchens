import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

class Manage3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        authorName: '',
        email: '',
        phone: '',
        title: '',
        content: '',
        timestamp: '',
      },
      page: 1,
      total: 0,
    };
    this.handleDecrease = this.handleDecrease.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);
  }

  handleIncrease() {
    var page = this.state.page;
    if (page + 1 > this.state.total) {
      return;
    }
    page = page + 1;
    axios.get(`/api/v1/requests?page=${page}&limit=1`).then((res) => {
      this.setState({ data: res.data.data[0], page: page });
    });
  }
  handleDecrease() {
    var page = this.state.page;
    if (page === 1) {
      return;
    }
    page = page - 1;
    axios.get(`/api/v1/requests?page=${page}&limit=1`).then((res) => {
      this.setState({ data: res.data.data[0], page: page });
    });
  }

  componentDidMount() {
    axios.get('/api/v1/requests?page=1&limit=1').then((res) => {
      if (res.data.data[0]) {
        this.setState({ data: res.data.data[0] });
      }
    });
    axios.get('/api/v1/requests').then((res) => {
      this.setState({ total: res.data.count });
    });
  }

  render() {
    return (
      <Grid container className="manage3-content">
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>
          <p>제목</p>
        </Grid>
        <Grid item xs={6}>
          <p>{this.state.data.title}</p>
        </Grid>
        <Grid item xs={2}></Grid>

        <Grid item xs={2}></Grid>
        <Grid item xs={2}>
          <p>상담요청자</p>
        </Grid>
        <Grid item xs={6}>
          <p>{this.state.data.authorName}</p>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>
          <p>문의 내용</p>
        </Grid>
        <Grid item xs={6}>
          <p>{this.state.data.content}</p>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>
          <p>문의 날짜</p>
        </Grid>
        <Grid item xs={6}>
          <p>{this.state.data.timestamp}</p>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>
          <p>이메일</p>
        </Grid>
        <Grid item xs={6}>
          <p>{this.state.data.email}</p>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>
          <p>전화번호</p>
        </Grid>
        <Grid item xs={6}>
          <p>{this.state.data.phone}</p>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>
          <p>페이지</p>
        </Grid>
        <Grid item xs={6}>
          <p>
            {this.state.page} / {this.state.total}
          </p>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}></Grid>
        </Grid>
        <Grid item xs={5}></Grid>
        <Grid item xs={1}>
          <button className="decrease" onClick={this.handleDecrease}>
            이전 페이지
          </button>
        </Grid>
        <Grid item xs={1}>
          <button className="increase" onClick={this.handleIncrease}>
            다음 페이지
          </button>
        </Grid>
        <Grid item xs={5}></Grid>
      </Grid>
    );
  }
}

export default Manage3;
