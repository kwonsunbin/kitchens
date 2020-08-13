import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

class Noticepostbox extends Component {
  render() {
    return (
      <Fragment className="pagebox">
        <Grid container className="postcontentmainbox">
          <Grid container item xs={2} className="navbar-column">
            <h2>고객지원</h2>
            <ul>
              <Link to="./notice">공지사항</Link>
              <Link to="./draft">상담 및 문의</Link>
            </ul>
          </Grid>

          <Grid container item xs={9} className="contentbox">
            <Grid item xs={2}>
              <p className="idx">제목</p>
            </Grid>
            <Grid item xs={10}>
              <p>{this.props.content.title}</p>
            </Grid>
            <Grid item xs={2}>
              <p className="idx">작성자</p>
            </Grid>
            <Grid item xs={10}>
              <p>{this.props.content.authorName}</p>
            </Grid>
            <Grid item xs={2}>
              <p className="idx">작성일시</p>
            </Grid>
            <Grid item xs={10}>
              <p>{this.props.content.timestamp}</p>
            </Grid>
            <Grid item xs={2}>
              <p className="idx">내용</p>
            </Grid>
            <Grid item xs={10}>
              <p>{this.props.content.content}</p>
            </Grid>
          </Grid>
          <Grid item xs={11}>
            <Link to="./notice" id="noticebacklink">
              목록으로
            </Link>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default Noticepostbox;
