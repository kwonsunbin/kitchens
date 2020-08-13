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
            <p className="idx">제목</p>
            <p>{this.props.content.title}</p>
            <p className="idx">작성자</p>
            <p>{this.props.content.authorName}</p>
            <p className="idx">작성일시</p>
            <p>{this.props.content.timestamp}</p>
            <p className="idx">내용</p>
            <p>{this.props.content.content}</p>
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
