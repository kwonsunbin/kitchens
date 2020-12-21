import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

class Mainbox4 extends Component {
  render() {
    return (
      <Fragment>
        <Hidden smDown>
          <Grid container className="mainbox4">
            <Grid item xs={12}>
              &nbsp;
            </Grid>
            <Grid
              container
              item
              xs={12}
              alignItems="center"
              className="onlineconsult"
            >
              <Grid item xs={4}></Grid>
              <Grid item xs={4}>
                <Grid align="center" className="deep">
                  <h1>견적 상담 및 문의</h1>
                  <h4>
                    키친스에 궁금한 사항을 문의주시면 친절하게 답변드리겠습니다.
                  </h4>

                  <Link to="./consult" className="consultbutton">
                    게시판 바로가기
                  </Link>
                </Grid>
              </Grid>
              <Grid item xs={4}></Grid>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid container className="mainbox4small">
            <Grid item xs={12}>
              &nbsp;
            </Grid>
            <Grid
              container
              item
              xs={12}
              alignItems="center"
              className="onlineconsultsmall"
            >
              <Grid item xs={1}></Grid>
              <Grid item xs={10}>
                <Grid align="center" className="deep">
                  <h1>견적 상담 및 문의</h1>
                  <h4>
                    키친스에 궁금한 사항을 문의주시면 친절하게 답변드리겠습니다.
                  </h4>

                  <Link to="./consult" className="consultbuttonsmall">
                    게시판 바로가기
                  </Link>
                </Grid>
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
          </Grid>
        </Hidden>
      </Fragment>
    );
  }
}

export default Mainbox4;
