import React, { Component, Fragment } from 'react';
import axios from 'axios';

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
    axios
      .get(`http://localhost:8080/api/v1/requests?page=${page}&limit=1`)
      .then((res) => {
        this.setState({ data: res.data.data[0], page: page });
      });
  }
  handleDecrease() {
    var page = this.state.page;
    if (page === 1) {
      return;
    }
    page = page - 1;
    axios
      .get(`http://localhost:8080/api/v1/requests?page=${page}&limit=1`)
      .then((res) => {
        this.setState({ data: res.data.data[0], page: page });
      });
  }

  componentDidMount() {
    axios
      .get('http://localhost:8080/api/v1/requests?page=1&limit=1')
      .then((res) => {
        if (res.data.data[0]) {
          this.setState({ data: res.data.data[0] });
        }
      });
    axios.get('http://localhost:8080/api/v1/requests').then((res) => {
      this.setState({ total: res.data.count });
    });
  }

  render() {
    return (
      <Fragment>
        <div className="manage3-box">
          <div>
            <i className="fas fa-angle-left" onClick={this.handleDecrease}></i>
          </div>
          <div className="manage3-content">
            <p>제목</p>
            <p>{this.state.data.title}</p>
            <p>상담요청자</p>
            <p>{this.state.data.authorName}</p>
            <p>문의 내용</p>
            <p>{this.state.data.content}</p>
            <p>문의 날짜</p>
            <p>{this.state.data.timestamp}</p>
            <p>이메일</p>
            <p>{this.state.data.email}</p>
            <p>전화번호</p>
            <p>{this.state.data.phone}</p>
            <p>페이지</p>
            <p>
              {this.state.page} / {this.state.total}
            </p>
          </div>
          <div>
            <i className="fas fa-angle-right" onClick={this.handleIncrease}></i>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Manage3;
