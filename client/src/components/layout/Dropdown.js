import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Subphotobox from './Subphotobox';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { isAtMain: false };
  }

  render() {
    if (this.props.clicked) {
      return (
        <div className="parent">
          <div>
            <Grid container item>
              <Subphotobox />
            </Grid>
          </div>
          <div>
            <Grid container item className="dropdown">
              <Grid item xs={3}></Grid>
              <Grid container item xs={9} spacing={0} direction="row-reverse">
                <Grid item xs={12}></Grid>
                <Grid item xs={2} align="center">
                  <Link to="../intro">회사소개</Link>
                </Grid>
                <Grid item xs={2} align="center">
                  <Link to="../gallery">갤러리</Link>
                </Grid>
                <Grid item xs={2} align="center">
                  <Link to="../notice">공지사항</Link>
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={2} align="center">
                  <Link to="../map">오시는 길</Link>
                </Grid>
                <Grid item xs={2} align="center">
                  <Link to="../draft">상담 및 문의</Link>
                </Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={12}></Grid>
              </Grid>
              <Grid />
            </Grid>
          </div>
        </div>
      );
    } else {
      return (
        <Fragment>
          <Subphotobox />
        </Fragment>
      );
    }
  }
}

export default Dropdown;
