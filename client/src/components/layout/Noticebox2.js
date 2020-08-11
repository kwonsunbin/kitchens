import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Postpiece from './Postpiece';
import uuid from 'react-uuid';

class Noticebox2 extends Component {
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
      .get('http://localhost:8080/api/v1/notices', {
        params: { page: 1, limit: 10 },
      })
      .then((response) => {
        this.setState({ data: response.data });
      });
    axios.get('http://localhost:8080/api/v1/notices').then((response) => {
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
      <div className="postmainbox">
        <div className="navbar-column">
          <h2>고객지원</h2>
          <ul>
            <Link to="./notice">공지사항</Link>
          </ul>
        </div>

        <div className="postshowbox">
          <div className="postshowbox-head">
            <h1>공지 게시판</h1>
          </div>
          <div className="bar">
            <p>제목</p>
            <p>작성자</p>
            <p>작성일</p>
          </div>
          <div className="posts">
            <ul>{list}</ul>
          </div>

          <div className="pagination-notice">
            <button onClick={this.handleDecrease}> 이전 페이지 </button>

            <div className="pagination-page">
              <p>
                {this.state.page} / {this.state.total}
              </p>
            </div>

            <button onClick={this.handleIncrease}> 다음 페이지 </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Noticebox2;
