import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

class Noticepostbox extends Component {
  render() {
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
            <Grid container item xs={8} className="noticepbox">
              <Grid item xs={2} className="tblidx">
                <div className="idx">제목</div>
              </Grid>
              <Grid item xs={10} className="tblc">
                <div>{this.props.content.title}</div>
              </Grid>
              <Grid item xs={2} className="tblidx">
                <div className="idx">작성자</div>
              </Grid>
              <Grid item xs={10} className="tblc">
                <div>{this.props.content.authorName}</div>
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
            <Grid item xs={2}></Grid>
            <Grid item xs={9}></Grid>
            <Grid item xs={1} align="center">
              <Link to="../notice">
                <div className="consultbutton3">목록</div>
              </Link>
            </Grid>
            <Grid item xs={2}></Grid>
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
            <Grid container item xs={12} className="noticepbox">
              <Grid item xs={2} className="tblidx">
                <div className="idx">제목</div>
              </Grid>
              <Grid item xs={10} className="tblc">
                <div>{this.props.content.title}</div>
              </Grid>
              <Grid item xs={2} className="tblidx">
                <div className="idx">작성자</div>
              </Grid>
              <Grid item xs={10} className="tblc">
                <div>{this.props.content.authorName}</div>
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
            <Grid item xs={10}></Grid>
            <Grid item xs={2} align="center">
              <Link to="../notice">
                <div className="consultbutton3small">목록</div>
              </Link>
            </Grid>
          </Grid>
        </Hidden>
      </Fragment>
    );
  }
}

export default Noticepostbox;
