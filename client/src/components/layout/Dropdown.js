import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Subphotobox from './Subphotobox';
import Hidden from '@material-ui/core/Hidden';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { isAtMain: false };
  }

  render() {
    if (this.props.clicked) {
      return (
        <Fragment>
          <Hidden smDown>
            <div className="parent">
              <div>
                <Grid container item>
                  <Subphotobox />
                </Grid>
              </div>
              <div>
                <Grid container item className="dropdown">
                  <Grid item xs={3}></Grid>
                  <Grid
                    container
                    item
                    xs={9}
                    spacing={0}
                    direction="row-reverse"
                  >
                    <Grid item xs={12}></Grid>
                    <Grid item xs={2} align="center">
                      <Link to="../notice">공지사항</Link>
                    </Grid>
                    <Grid item xs={2} align="center">
                      <Link to="../example">실제 시공 사례</Link>
                    </Grid>
                    <Grid item xs={2} align="center">
                      <Link to="../product1">싱크대, 키친</Link>
                    </Grid>
                    <Grid item xs={2} align="center">
                      <Link to="../intro">회사 소개</Link>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={2} align="center">
                      <Link to="../draft">상담 및 견적 문의</Link>
                    </Grid>
                    <Grid item xs={2} align="center"></Grid>
                    <Grid item xs={2} align="center">
                      <Link to="../product2">인테리어</Link>
                    </Grid>
                    <Grid item xs={2} align="center">
                      <Link to="../map">오시는 길</Link>
                    </Grid>

                    <Grid item xs={4}></Grid>
                    <Grid item xs={2} align="center"></Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2} align="center">
                      <Link to="../product3">기타 맞춤가구</Link>
                    </Grid>
                    <Grid item xs={6} align="center"></Grid>

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
          </Hidden>
          <Hidden mdUp>
            <div className="parent">
              <div>
                <Grid container item>
                  <Subphotobox />
                </Grid>
              </div>
              <div>
                <Grid container item className="dropdownsmall">
                  <Grid item xs={12}></Grid>

                  <Grid item xs={4} align="center">
                    <Link to="../notice">공지사항</Link>
                  </Grid>
                  <Grid item xs={4} align="center">
                    <Link to="../intro">회사 소개</Link>
                  </Grid>
                  <Grid item xs={4} align="center">
                    <Link to="../map">오시는 길</Link>
                  </Grid>

                  <Grid item xs={12}></Grid>
                  <Grid item xs={4} align="center">
                    <Link to="../product1">싱크대, 키친</Link>
                  </Grid>

                  <Grid item xs={4} align="center">
                    <Link to="../product2">인테리어</Link>
                  </Grid>
                  <Grid item xs={4} align="center">
                    <Link to="../product3">기타 맞춤가구</Link>
                  </Grid>

                  <Grid item xs={12}></Grid>

                  <Grid item xs={4} align="center">
                    <Link to="../example">실제 시공 사례</Link>
                  </Grid>

                  <Grid item xs={4} align="center">
                    <Link to="../draft">상담 및 견적 문의</Link>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Hidden>
        </Fragment>
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
