import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Hidden smDown>
          <Grid container className="footer">
            <Grid item xs={2} className="footer-logo">
              <p>Kitchens </p>
            </Grid>
            <Grid item xs={10} className="footer-desc">
              <p>
                대표 : 신우창 / 이메일 : kidhanssem@naver.com 주소 : 대구 북구
                침산남로 48 (노원동) TEL : 053-766-0411 사업자등록번호
                503-17-45896
              </p>
              <p>Copyright © 2020 Kitchens Co. Ltd. All rights reserved</p>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid container className="footersmall">
            <Grid item xs={2} className="footer-logo">
              <p>Kitchens </p>
            </Grid>
            <Grid item xs={10} className="footer-desc">
              <p>Copyright © 2020 Kitchens Co. Ltd. All rights reserved</p>
            </Grid>
          </Grid>
        </Hidden>
      </Fragment>
    );
  }
}

export default Footer;
