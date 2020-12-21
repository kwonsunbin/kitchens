import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Postpiece from './Postpiece';
import uuid from 'react-uuid';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import swal from 'sweetalert';
import { confirmAlert } from 'react-confirm-alert'; // Import

class Noticebox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
      total: 1,
      page: 1,
      isClicked: false,
      authorName: '',
      title: '',
      content: '',
      selectedFile: null,
    };
    this.handelToggle = this.handelToggle.bind(this);

    this.handleDecrease = this.handleDecrease.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleFileInput = this.handleFileInput.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFileInput(e) {
    console.log(e.target.files);
    this.setState({
      selectedFile: e.target.files,
    });
  }

  handelToggle() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    confirmAlert({
      title: 'Confirm',
      message: '모든 항목을 정확히 기재하셨나요?',
      buttons: [
        {
          label: '네',
          onClick: () => {
            var formData = new FormData();

            if (
              !this.state.title ||
              !this.state.content ||
              !this.state.authorName
            ) {
              swal('빠짐없이 입력해주세요');
              return;
            }
            if (this.state.selectedFile) {
              formData.append(`file`, this.state.selectedFile[0]);
            }
            formData.append('title', this.state.title);
            formData.append('content', this.state.content);
            formData.append('authorName', this.state.authorName);
            axios({
              method: 'post',
              url: '/api/v1/notices',
              data: formData,
            })
              .then((res) => {
                if (res.status === 200) {
                  swal('등록되었습니다!');
                  window.location.reload(true);
                }
              })
              .catch(function (error) {
                if (error.response.status === 403) {
                  swal('로그인 해주세요');
                } else if (error.response) {
                  swal('사진 id를 확인해주세요');
                }
              });
            this.refs.file.value = '';

            this.setState({
              authorName: '',
              selectedFile: null,
              title: '',
              content: '',
            });
          },
        },
        {
          label: '아니오',
          onClick: () => {
            return;
          },
        },
      ],
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
              <Grid item xs={8}>
                <h1>공지 게시판</h1>
              </Grid>
              <Grid item xs={4}>
                {this.props.isLoggedIn ? (
                  <Fragment>
                    <div className="consultbutton2" onClick={this.handelToggle}>
                      공지 작성하기
                    </div>
                  </Fragment>
                ) : (
                  <Fragment></Fragment>
                )}
              </Grid>
              {this.state.isClicked ? (
                <Grid item container xs={12} className="hiddenThings">
                  <Grid container item xs={12}>
                    <form className="fullform" encType="multipart/form-data">
                      <Grid item xs={12}>
                        <input
                          placeholder="이름"
                          value={this.state.authorName}
                          onChange={this.handleChange}
                          id="authorName"
                          className="fullform"
                        ></input>
                      </Grid>
                      <Grid>
                        <input
                          placeholder="제목"
                          value={this.state.title}
                          onChange={this.handleChange}
                          id="title"
                          className="fullform"
                        />
                      </Grid>
                      <Grid>
                        <textarea
                          placeholder="공지내용"
                          value={this.state.content}
                          onChange={this.handleChange}
                          id="content"
                          className="fullform"
                        />
                      </Grid>

                      <Grid>
                        <input
                          type="file"
                          name="file"
                          multiple
                          onChange={this.handleFileInput}
                          ref="file"
                          className="fullform"
                        />
                      </Grid>
                      <Grid>
                        <button
                          onClick={this.handleSubmit}
                          className="fullform"
                        >
                          작성하기
                        </button>
                      </Grid>
                    </form>
                  </Grid>
                </Grid>
              ) : (
                <Fragment></Fragment>
              )}

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
