import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import 'react-confirm-alert/src/react-confirm-alert.css';
import swal from 'sweetalert';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; // Import

class Noticepostbox extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handelToggle = this.handelToggle.bind(this);
    this.handleFileInput = this.handleFileInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.state = {
      authorName: `${this.props.content.authorName}`,
      title: `${this.props.content.title}`,
      content: `${this.props.content.content}`,
      selectedFile: null,
    };
  }

  handleUpdate(e) {
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
              method: 'put',
              url: `/api/v1/notices/${this.props.content._id}`,
              data: formData,
            })
              .then((res) => {
                if (res.status === 200) {
                  swal('수정되었습니다!');
                  window.history.back();
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
  handleDelete() {
    confirmAlert({
      title: 'Confirm',
      message: '정말 삭제하시겠습니까?',
      buttons: [
        {
          label: '네',
          onClick: () => {
            axios
              .delete(`/api/v1/notices/${this.props.content._id}`)
              .then((res) => {
                if (res.status === 200) {
                  swal('삭제되었습니다');
                }
              })
              .catch(function (error) {
                if (error.response.status === 403) {
                  swal('로그인 해주세요');
                } else if (error.response) {
                  swal('공지 id를 확인해주세요');
                }
              });

            window.history.back();
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
  render() {
    console.log(this.props.isLoggedIn);
    return (
      <Fragment>
        <Hidden smDown>
          <Grid container className="noticepostboxtop">
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
            <Grid container item xs={8}>
              <Grid item xs={12}>
                <h2>{this.props.content.title}</h2>
              </Grid>

              <Grid item xs={2}>
                {this.props.content.authorName}
              </Grid>

              <Grid item xs={10}>
                {this.props.content.timestamp}
              </Grid>
              <Grid item xs={12}>
                <div className="borderline2"></div>
              </Grid>

              <Grid item xs={12}>
                {this.props.content.content}
              </Grid>
              <Grid item xs={12}>
                &nbsp;
              </Grid>
              {this.props.content.imgPath ? (
                <Grid item xs={12}>
                  <img
                    src={`../uploads/${this.props.content.imgPath}`}
                    height="100%"
                    width="100%"
                    alt="photos"
                  />
                </Grid>
              ) : (
                <Fragment></Fragment>
              )}
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
          <Grid container className="borderline2">
            {this.props.isLoggedIn ? (
              <Fragment>
                <Grid item xs={2}></Grid>
                <Grid item xs={1} align="center">
                  <div className="consultbutton3" onClick={this.handelToggle}>
                    수정
                  </div>
                </Grid>
                <Grid item xs={1} align="center">
                  <div className="consultbutton3" onClick={this.handleDelete}>
                    삭제
                  </div>
                </Grid>
                <Grid item xs={1} align="center">
                  <Link to="../notice">
                    <div className="consultbutton3">목록</div>
                  </Link>
                </Grid>
                <Grid item xs={1} align="center"></Grid>
              </Fragment>
            ) : (
              <Fragment>
                <Grid item xs={9}></Grid>

                <Grid item xs={1} align="center">
                  <Link to="../notice">
                    <div className="consultbutton3">목록</div>
                  </Link>
                </Grid>
                <Grid item xs={2}></Grid>
              </Fragment>
            )}

            {this.state.isClicked ? (
              <Grid container item xs={12} className="hiddenThings">
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                  <form className="fullform" encType="multipart/form-data">
                    <input
                      placeholder="제목"
                      value={this.state.title}
                      onChange={this.handleChange}
                      id="title"
                      className="fullform"
                    />

                    <input
                      placeholder="작성자"
                      value={this.state.authorName}
                      onChange={this.handleChange}
                      id="authorName"
                      className="fullform"
                    />

                    <textarea
                      placeholder="공지내용"
                      value={this.state.content}
                      onChange={this.handleChange}
                      id="content"
                      className="fullform"
                    />

                    <input
                      type="file"
                      name="file"
                      multiple
                      onChange={this.handleFileInput}
                      ref="file"
                      className="fullform"
                    />
                    <button onClick={this.handleUpdate} className="fullform">
                      수정하기
                    </button>
                  </form>
                </Grid>
                <Grid item xs={2}></Grid>
              </Grid>
            ) : (
              <Fragment></Fragment>
            )}
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid container className="noticepostboxtopsmall">
            <Grid container className="forbgsmall">
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

            <Grid container item xs={12}>
              <Grid item xs={12}>
                <h2>{this.props.content.title}</h2>
              </Grid>

              <Grid item xs={2}>
                {this.props.content.authorName}
              </Grid>

              <Grid item xs={10}>
                {this.props.content.timestamp}
              </Grid>
              <Grid item xs={12}>
                <div className="borderline2"></div>
              </Grid>

              <Grid item xs={12}>
                {this.props.content.content}
              </Grid>
              <Grid item xs={12}>
                &nbsp;
              </Grid>
              {this.props.content.imgPath ? (
                <Grid item xs={12}>
                  <img
                    src={`../uploads/${this.props.content.imgPath}`}
                    height="100%"
                    width="100%"
                    alt="photos"
                  />
                </Grid>
              ) : (
                <Fragment></Fragment>
              )}
            </Grid>
          </Grid>
          <Grid container className="borderline2">
            {this.props.isLoggedIn ? (
              <Fragment>
                <Grid item xs={3}></Grid>
                <Grid item xs={2} align="center">
                  <div
                    className="consultbutton3small"
                    onClick={this.handelToggle}
                  >
                    수정
                  </div>
                </Grid>
                <Grid item xs={2} align="center">
                  <div
                    className="consultbutton3small"
                    onClick={this.handleDelete}
                  >
                    삭제
                  </div>
                </Grid>
                <Grid item xs={2} align="center">
                  <Link to="../notice">
                    <div className="consultbutton3small">목록</div>
                  </Link>
                </Grid>
                <Grid item xs={1} align="center"></Grid>
              </Fragment>
            ) : (
              <Fragment>
                <Grid item xs={1}></Grid>
                <Grid item xs={9}></Grid>

                <Grid item xs={2} align="center">
                  <Link to="../notice">
                    <div className="consultbutton3small">목록</div>
                  </Link>
                </Grid>
              </Fragment>
            )}

            {this.state.isClicked ? (
              <Grid container item xs={12} className="smallhiddenThings">
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                  <form className="fullformsmall" encType="multipart/form-data">
                    <input
                      placeholder="제목"
                      value={this.state.title}
                      onChange={this.handleChange}
                      id="title"
                      className="fullformsmall"
                    />

                    <input
                      placeholder="작성자"
                      value={this.state.authorName}
                      onChange={this.handleChange}
                      id="authorName"
                      className="fullformsmall"
                    />

                    <textarea
                      placeholder="공지내용"
                      value={this.state.content}
                      onChange={this.handleChange}
                      id="content"
                      className="fullformsmall"
                    />

                    <input
                      type="file"
                      name="file"
                      multiple
                      onChange={this.handleFileInput}
                      ref="file"
                      className="fullformsmall"
                    />
                    <button
                      onClick={this.handleUpdate}
                      className="fullformsmall"
                    >
                      수정하기
                    </button>
                  </form>
                </Grid>
                <Grid item xs={2}></Grid>
              </Grid>
            ) : (
              <Fragment></Fragment>
            )}
          </Grid>
        </Hidden>
      </Fragment>
    );
  }
}

export default Noticepostbox;
