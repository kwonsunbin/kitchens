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
            <Grid item xs={12}>
              <Link to="../notice" id="noticebacklink">
                목록으로
              </Link>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid container className="noticepostboxtopsmall">
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
            <Grid item xs={12}>
              <Link to="../notice" id="noticebacklink">
                목록으로
              </Link>
            </Grid>
          </Grid>
        </Hidden>
      </Fragment>
    );
  }
}

export default Noticepostbox;
