import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Hidden from '@material-ui/core/Hidden';
import { confirmAlert } from 'react-confirm-alert'; // Import

import swal from 'sweetalert';

class Consultpostbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      isClicked: false,
      isClicked2: false,
      answer: '',
      authorName: '',
      password: '',
      title: '',
      content: '',
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
    this.adminDelete = this.adminDelete.bind(this);
  }
  async handleSubmit2(e) {
    e.preventDefault();

    axios({
      method: 'put',
      url: `/api/v1/requests/${this.props.content._id}`,
      data: { answer: this.state.answer },
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          swal('답변 등록 되었습니다');
          window.history.back();
        }
      })
      .catch(function (error) {
        if (error.response) {
          swal('모든 항목을 채워주세요');
        }
      });
  }

  async handleSubmit(e) {
    e.preventDefault();
    var data = { ...this.state };
    let pw = '';
    await axios
      .get(`/api/v1/requests/${this.props.content._id}`)
      .then((res) => {
        pw = res.data.data.password;
      });

    if (data.password === pw) {
      axios({
        method: 'put',
        url: `/api/v1/requests/${this.props.content._id}`,
        data: data,
      })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            swal('수정되었습니다');
            window.history.back();
          }
        })
        .catch(function (error) {
          if (error.response) {
            swal('모든 항목을 채워주세요');
          }
        });
    } else {
      swal('게시글 비밀번호를 확인해주세요');
    }
  }

  handleUpdate() {
    window.location.replace('/update');
  }

  toggle() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  toggle2() {
    this.setState({ isClicked2: !this.state.isClicked2 });
  }
  handleToggle() {
    this.setState({ showModal: !this.state.showModal });
  }

  adminDelete() {
    confirmAlert({
      title: 'Confirm',
      message: '삭제 하시겠습니까?',
      buttons: [
        {
          label: '네',
          onClick: () => {
            axios
              .delete(`/api/v1/requests/${this.props.content._id}`)
              .then((res) => {
                console.log(res);
                if (res.status === 200) {
                  swal('삭제 되었습니다');
                  window.location.replace('../consult');
                }
              })
              .catch(function (error) {
                if (error.response.status === 403) {
                  swal('로그인 해주세요');
                } else if (error.response) {
                  swal('상담글 id를 확인해주세요');
                }
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
  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }
  async handleDelete() {
    let pw = '';
    const inputPW = this.state.password;
    await axios
      .get(`/api/v1/requests/${window.location.href.split('/')[4]}`)
      .then((res) => {
        console.log(res);
        pw = res.data.data.password;
      });
    if (pw === inputPW) {
      axios
        .delete(`/api/v1/requests/${window.location.href.split('/')[4]}`)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            swal('삭제되었습니다');
            window.history.back();
          }
        });
      this.handleToggle();
    } else {
      swal('비밀번호를 확인해주세요!');
      this.setState({ password: '' });
    }
  }

  render() {
    return (
      <Fragment>
        <Hidden smDown>
          <div
            className="modal"
            style={{ display: this.state.showModal ? 'block' : 'none' }}
          >
            <div className="Modal">
              <form>
                <input
                  placeholder="비밀번호"
                  value={this.state.password}
                  onChange={this.handleChange}
                  className="fullform"
                  id="password"
                />
              </form>
              <div className="button-wrap">
                <button className="one" onClick={this.handleDelete}>
                  삭제하기
                </button>
                <button className="two" onClick={this.handleToggle}>
                  닫기
                </button>
              </div>
            </div>
          </div>
          <Grid container className="noticepostboxtop">
            <Grid container className="forbg">
              <Grid item xs={1}></Grid>
              <Grid item xs={10} align="center">
                <h1>견적 문의 및 상담</h1>
              </Grid>
              <Grid item xs={1}></Grid>

              <Grid item xs={1}></Grid>

              <Grid item xs={10} align="center">
                <p>
                  견적 문의, AS 요청, 방문 상담 신청에 관한 글을 자유롭게
                  작성하는 곳 입니다.
                </p>
                <p>&nbsp;</p>
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
            <Grid container item xs={2} align="center"></Grid>

            <Grid container item xs={8}>
              <Grid item xs={12}>
                <h1>{this.props.content.title}</h1>
              </Grid>
              <Grid item xs={3}>
                <strong>{this.props.content.authorName}</strong>
              </Grid>
              <Grid item xs={9}>
                {this.props.content.timestamp}
              </Grid>
              <Grid item xs={12} className="borderline2"></Grid>
              <Grid item xs={12}>
                &nbsp;
              </Grid>
              <Grid item xs={12}>
                {this.props.content.content}
              </Grid>
            </Grid>

            <Grid item xs={2}></Grid>
            <Grid item xs={2}></Grid>

            <Grid container item xs={8}>
              {this.props.content.answer ? (
                <Fragment>
                  <Grid item xs={12} className="borderline2"></Grid>
                  <Grid item xs={12}>
                    <h1>안녕하세요 키친스입니다!</h1>
                  </Grid>
                  <Grid item xs={12}>
                    <strong>관리자</strong>
                  </Grid>

                  <Grid item xs={12}>
                    {this.props.content.answer}
                  </Grid>
                </Fragment>
              ) : (
                <Fragment></Fragment>
              )}
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid container item xs={2} align="center"></Grid>
            {this.props.isLoggedIn ? (
              <Fragment>
                <Grid item xs={5} align="center"></Grid>
                <Grid item xs={1} align="center">
                  <div className="consultbutton3" onClick={this.toggle2}>
                    답변
                  </div>
                </Grid>

                <Grid item xs={1} align="center">
                  <div className="consultbutton3" onClick={this.adminDelete}>
                    삭제
                  </div>
                </Grid>
                <Grid item xs={1} align="center">
                  <Link to="../consult">
                    <div className="consultbutton3">목록</div>
                  </Link>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={2}></Grid>
                {this.state.isClicked2 ? (
                  <Grid item xs={8} className="hiddenThings">
                    <form className="fullform">
                      <textarea
                        placeholder="답변"
                        value={this.state.answer}
                        onChange={this.handleChange}
                        id="answer"
                        className="fullform"
                      ></textarea>
                      <button className="fullform" onClick={this.handleSubmit2}>
                        답변 등록하기
                      </button>
                    </form>
                  </Grid>
                ) : (
                  <Grid item xs={8}></Grid>
                )}
                <Grid item xs={2}></Grid>
              </Fragment>
            ) : (
              <Fragment>
                <Grid item xs={5} align="center"></Grid>
                <Grid item xs={1} align="center">
                  <div className="consultbutton3" onClick={this.toggle}>
                    수정
                  </div>
                </Grid>
                <Grid item xs={1} align="center">
                  <div className="consultbutton3" onClick={this.handleToggle}>
                    삭제
                  </div>
                </Grid>
                <Grid item xs={1} align="center">
                  <Link to="../consult">
                    <div className="consultbutton3">목록</div>
                  </Link>
                </Grid>
                <Grid item xs={4}></Grid>
              </Fragment>
            )}
            {this.state.isClicked ? (
              <Grid container className="hiddenThings">
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                  <form onSubmit={this.handleSubmit} className="fullform">
                    <Grid item xs={12}>
                      <input
                        className="fullform"
                        placeholder="제목"
                        value={this.state.title}
                        onChange={this.handleChange}
                        id="title"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <input
                        className="fullform"
                        placeholder="작성자"
                        value={this.state.authorName}
                        onChange={this.handleChange}
                        id="authorName"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <input
                        className="fullform"
                        placeholder="비밀번호"
                        value={this.state.password}
                        onChange={this.handleChange}
                        id="password"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <textarea
                        className="ansdmlsodyd"
                        placeholder="문의 내용"
                        value={this.state.content}
                        onChange={this.handleChange}
                        id="content"
                      />
                    </Grid>

                    <Grid item xs={12} className="fullform">
                      <button className="fullform" type="submit">
                        수정하기
                      </button>
                    </Grid>
                  </form>
                </Grid>
                <Grid item xs={2}></Grid>
              </Grid>
            ) : (
              <Grid item xs={8}></Grid>
            )}
            <Grid item xs={2}></Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <div
            className="modal"
            style={{ display: this.state.showModal ? 'block' : 'none' }}
          >
            <div className="Modal">
              <form>
                <input
                  placeholder="비밀번호"
                  value={this.state.password}
                  onChange={this.handleChange}
                  className="fullform"
                  id="password"
                />
              </form>
              <div className="button-wrap">
                <button className="one" onClick={this.handleDelete}>
                  삭제하기
                </button>
                <button className="two" onClick={this.handleToggle}>
                  닫기
                </button>
              </div>
            </div>
          </div>
          <Grid container className="noticepostboxtopsmall">
            <Grid container className="forbgsmall">
              <Grid item xs={1}></Grid>
              <Grid item xs={10} align="center">
                <h1>견적 문의 및 상담</h1>
              </Grid>
              <Grid item xs={1}></Grid>

              <Grid item xs={1}></Grid>

              <Grid item xs={10} align="center">
                <p>
                  견적 문의, AS 요청, 방문 상담 신청에 관한 글을 자유롭게
                  작성하는 곳 입니다.
                </p>
                <p>&nbsp;</p>
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>

            <Grid container item xs={12}>
              <Grid item xs={12}>
                <h1>{this.props.content.title}</h1>
              </Grid>
              <Grid item xs={3}>
                <strong>{this.props.content.authorName}</strong>
              </Grid>
              <Grid item xs={9}>
                {this.props.content.timestamp}
              </Grid>
              <Grid item xs={12} className="borderline2"></Grid>
              <Grid item xs={12}>
                &nbsp;
              </Grid>
              <Grid item xs={12}>
                {this.props.content.content}
              </Grid>
            </Grid>

            <Grid container item xs={12}>
              {this.props.content.answer ? (
                <Fragment>
                  <Grid item xs={12} className="borderline2"></Grid>
                  <Grid item xs={12}>
                    <h1>안녕하세요 키친스입니다!</h1>
                  </Grid>
                  <Grid item xs={12}>
                    <strong>관리자</strong>
                  </Grid>

                  <Grid item xs={12}>
                    {this.props.content.answer}
                  </Grid>
                </Fragment>
              ) : (
                <Fragment></Fragment>
              )}
            </Grid>
            <Grid container item xs={4} align="center"></Grid>
            {this.props.isLoggedIn ? (
              <Fragment>
                <Grid item xs={2} align="center"></Grid>
                <Grid item xs={2} align="center">
                  <div className="consultbutton3small" onClick={this.toggle2}>
                    답변
                  </div>
                </Grid>

                <Grid item xs={2} align="center">
                  <div
                    className="consultbutton3small"
                    onClick={this.adminDelete}
                  >
                    삭제
                  </div>
                </Grid>
                <Grid item xs={2} align="center">
                  <Link to="../consult">
                    <div className="consultbutton3small">목록</div>
                  </Link>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={2}></Grid>
                {this.state.isClicked2 ? (
                  <Grid item xs={8} className="smallhiddenThings">
                    <form className="fullformsmall">
                      <textarea
                        placeholder="답변"
                        value={this.state.answer}
                        onChange={this.handleChange}
                        id="answer"
                        className="fullformsmall"
                      ></textarea>
                      <button
                        className="fullformsmall"
                        onClick={this.handleSubmit2}
                      >
                        답변 등록하기
                      </button>
                    </form>
                  </Grid>
                ) : (
                  <Grid item xs={8}></Grid>
                )}
                <Grid item xs={2}></Grid>
              </Fragment>
            ) : (
              <Fragment>
                <Grid item xs={2} align="center"></Grid>
                <Grid item xs={2} align="center">
                  <div className="consultbutton3small" onClick={this.toggle}>
                    수정
                  </div>
                </Grid>
                <Grid item xs={2} align="center">
                  <div
                    className="consultbutton3small"
                    onClick={this.handleToggle}
                  >
                    삭제
                  </div>
                </Grid>
                <Grid item xs={2} align="center">
                  <Link to="../consult">
                    <div className="consultbutton3small">목록</div>
                  </Link>
                </Grid>
                <Grid item xs={3}></Grid>
              </Fragment>
            )}
            {this.state.isClicked ? (
              <Grid container className="smallhiddenThings">
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                  <form onSubmit={this.handleSubmit} className="fullformsmall">
                    <Grid item xs={12}>
                      <input
                        className="fullformsmall"
                        placeholder="제목"
                        value={this.state.title}
                        onChange={this.handleChange}
                        id="title"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <input
                        className="fullformsmall"
                        placeholder="작성자"
                        value={this.state.authorName}
                        onChange={this.handleChange}
                        id="authorName"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <input
                        className="fullformsmall"
                        placeholder="비밀번호"
                        value={this.state.password}
                        onChange={this.handleChange}
                        id="password"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <textarea
                        className="ansdmlsodyd"
                        placeholder="문의 내용"
                        value={this.state.content}
                        onChange={this.handleChange}
                        id="content"
                      />
                    </Grid>

                    <Grid item xs={12} className="fullformsmall">
                      <button className="fullformsmall" type="submit">
                        수정하기
                      </button>
                    </Grid>
                  </form>
                </Grid>
                <Grid item xs={2}></Grid>
              </Grid>
            ) : (
              <Grid item xs={8}></Grid>
            )}
            <Grid item xs={2}></Grid>
          </Grid>
        </Hidden>
      </Fragment>
    );
  }
}

export default Consultpostbox;
