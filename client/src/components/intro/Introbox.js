import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

const Introbox = () => {
  return (
    <Fragment>
      <Hidden smDown>
        <Fragment>
          <Grid container className="pagebox">
            <Grid container className="forbg">
              <Grid item xs={1}></Grid>
              <Grid item xs={10} align="center">
                <h1>회사 소개</h1>
              </Grid>
              <Grid item xs={1}></Grid>

              <Grid item xs={1}></Grid>

              <Grid item xs={10} align="center">
                <p>키친스를 소개합니다.</p>
                <p>&nbsp;</p>
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
            <Grid item xs={2}></Grid>

            <Grid container item xs={8} className="introbox">
              <Grid item xs={12}>
                <img src="../imgs/intro.jpg" alt="intro" width="100%" />
              </Grid>
              <Grid item xs={12}>
                <h1>안녕하세요 키친스입니다!</h1>
              </Grid>
              <Grid item xs={12}>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;안녕하세요 키친스입니다!</p>
              </Grid>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
        </Fragment>
      </Hidden>
      <Hidden mdUp>
        <Fragment>
          <Grid container className="pageboxsmall">
            <Grid container className="forbg">
              <Grid item xs={1}></Grid>
              <Grid item xs={10} align="center">
                <h1>회사 소개</h1>
              </Grid>
              <Grid item xs={1}></Grid>

              <Grid item xs={1}></Grid>

              <Grid item xs={10} align="center">
                <p>키친스를 소개합니다.</p>
                <p>&nbsp;</p>
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
            <Grid container item xs={12} className="introbox">
              <Grid item xs={12}>
                <img src="../imgs/intro.jpg" alt="intro" width="100%" />
              </Grid>
              <Grid item xs={12}>
                <h1>안녕하세요 키친스입니다!</h1>
              </Grid>
              <Grid item xs={12}>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;안녕하세요 키친스입니다!</p>
              </Grid>
            </Grid>
          </Grid>
        </Fragment>
      </Hidden>
    </Fragment>
  );
};

export default Introbox;
