import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Hidden from '@material-ui/core/Hidden';

import swal from 'sweetalert';

class Consultpostbox extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false, password: '' };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate() {
    window.location.replace('/update');
  }
  handleToggle() {
    this.setState({ showModal: !this.state.showModal });
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }
  handleDelete() {
    let pw = '';
    const inputPW = this.state.password;
    axios
      .get(`/api/v1/requests/${window.location.href.split('/')[4]}`)
      .then((res) => {
        pw = res.password;
      });
    if (pw === inputPW) {
      axios
        .delete(`/api/v1/requests/${window.location.href.split('/')[4]}`)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            swal('삭제되었습니다');
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
                />{' '}
              </form>
              <div className="button-wrap">
                <button className="one" onClick={this.handleDelete}>
                  삭제하기{' '}
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

            <Grid container item xs={8} className="noticepbox">
              <Grid item xs={2} className="tblidx">
                <div className="idx">제목</div>
              </Grid>
              <Grid item xs={10} className="tblc">
                <div>{this.props.content.title}</div>
              </Grid>

              <Grid item xs={2} className="tblidx">
                <div className="idx">작성일시</div>
              </Grid>
              <Grid item xs={10} className="tblc">
                <div>{this.props.content.timestamp}</div>
              </Grid>
              <Grid item xs={2} className="tblidx">
                <div className="idx">내용</div>
              </Grid>
              <Grid item xs={10} className="tblccontent">
                <div>{this.props.content.content}</div>
              </Grid>
            </Grid>
            <Grid container item xs={2} align="center"></Grid>
            <Grid item xs={7} align="center"></Grid>
            <Grid item xs={1} align="center">
              <Link
                to={{
                  pathname: `../updatereq`,
                  state: {
                    id: `${window.location.href.split('/')[4]}`,
                  },
                }}
              >
                <div className="consultbutton3">수정</div>
              </Link>
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
            <Grid item xs={2}></Grid>

            <Grid item xs={2}></Grid>
            <Grid container item xs={8}>
              {this.props.content.answer ? (
                <Fragment>
                  <Grid item container xs={12}></Grid>
                  <Grid container item xs={3}>
                    <Grid item xs={12} align="center">
                      <i className="fas fa-user-circle"></i>
                    </Grid>
                    <Grid item xs={12} align="center">
                      <h2>키친스</h2>
                    </Grid>
                  </Grid>
                  <Grid container item xs={9}>
                    <Grid item xs={12}>
                      {this.props.content.answer}
                    </Grid>
                  </Grid>
                </Fragment>
              ) : (
                <Fragment></Fragment>
              )}
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <div
            className="modal"
            style={{ display: this.state.showModal ? 'block' : 'none' }}
          >
            <div className="Modalsmall">
              <form>
                <input
                  placeholder="비밀번호"
                  value={this.state.password}
                  onChange={this.handleChange}
                  className="fullformsmall"
                  id="password"
                />{' '}
              </form>
              <div className="button-wrap">
                <button className="one" onClick={this.handleDelete}>
                  삭제하기{' '}
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
            <Grid container item xs={12} className="noticepbox">
              <Grid item xs={2} className="tblidx">
                <div className="idx">제목</div>
              </Grid>
              <Grid item xs={10} className="tblc">
                <div>{this.props.content.title}</div>
              </Grid>

              <Grid item xs={2} className="tblidx">
                <div className="idx">작성일시</div>
              </Grid>
              <Grid item xs={10} className="tblc">
                <div>{this.props.content.timestamp}</div>
              </Grid>
              <Grid item xs={2} className="tblidx">
                <div className="idx">내용</div>
              </Grid>
              <Grid item xs={10} className="tblc">
                <div>{this.props.content.content}</div>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              &nbsp;
            </Grid>
            <Grid item xs={6} align="center"></Grid>
            <Grid item xs={2} align="center">
              <Link
                to={{
                  pathname: `../updatereq`,
                  state: {
                    id: `${window.location.href.split('/')[4]}`,
                  },
                }}
              >
                <div className="consultbutton3small">수정</div>
              </Link>
            </Grid>
            <Grid item xs={2} align="center">
              <div className="consultbutton3small" onClick={this.handleToggle}>
                삭제
              </div>
            </Grid>
            <Grid item xs={2} align="center">
              <Link to="../consult">
                <div className="consultbutton3small">목록</div>
              </Link>
            </Grid>
            <Grid item xs={12}>
              &nbsp;
            </Grid>
            <Grid item xs={12}>
              &nbsp;
            </Grid>
            <Grid container item xs={12}>
              {this.props.content.answer ? (
                <Fragment>
                  <Grid item container xs={12}></Grid>
                  <Grid container item xs={3}>
                    <Grid item xs={12} align="center">
                      <i className="fas fa-user-circle"></i>
                    </Grid>
                    <Grid item xs={12} align="center">
                      <h2>키친스</h2>
                    </Grid>
                  </Grid>
                  <Grid container item xs={9}>
                    <Grid item xs={12}>
                      {this.props.content.answer}
                    </Grid>
                  </Grid>
                </Fragment>
              ) : (
                <Fragment></Fragment>
              )}
            </Grid>
          </Grid>
        </Hidden>
      </Fragment>
    );
  }
}

export default Consultpostbox;
