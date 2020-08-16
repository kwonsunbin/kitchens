import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

class Noticepostbox extends Component {
  render() {
    return (
      <Grid container className="noticepostboxtop">
        <Grid container item xs={2} align="center">
          <Grid item xs={12} align="center">
            <h2>고객지원</h2>
            <Link to="./notice">
              공지사항<br></br>
            </Link>
            <Link to="./draft">상담 및 문의</Link>
          </Grid>
        </Grid>

        <Grid container item xs={10} className="noticepbox">
          <Grid item xs={2} className="tblidx">
            <p className="idx">제목</p>
          </Grid>
          <Grid item xs={10} className="tblc">
            <p>{this.props.content.title}</p>
          </Grid>
          <Grid item xs={2} className="tblidx">
            <p className="idx">작성자</p>
          </Grid>
          <Grid item xs={10} className="tblc">
            <p>{this.props.content.authorName}</p>
          </Grid>
          <Grid item xs={2} className="tblidx">
            <p className="idx">작성일시</p>
          </Grid>
          <Grid item xs={10} className="tblc">
            <p>{this.props.content.timestamp}</p>
          </Grid>
          <Grid item xs={2} className="tblidx">
            <p className="idx">내용</p>
          </Grid>
          <Grid item xs={10} className="tblc">
            <p>{this.props.content.content}</p>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Link to="./notice" id="noticebacklink">
            목록으로
          </Link>
        </Grid>
      </Grid>
    );
  }
}

export default Noticepostbox;
