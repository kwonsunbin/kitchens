import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
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
            <Grid container item xs={10}>
              <Grid item xs={12}>
                &nbsp;
              </Grid>

              <Grid item xs={1}>
                <Link to="../law1" className="law">
                  이용약관
                </Link>
              </Grid>
              <Grid item xs={2}>
                <Link to="../law2" className="law">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;개인정보처리방침
                </Link>
              </Grid>
              <Grid item xs={1}>
                <Link to="../law3" className="law">
                  이메일무단수집거부
                </Link>
              </Grid>
              <Grid item xs={8}></Grid>
              <Grid item xs={12}>
                &nbsp;
              </Grid>

              <Grid item xs={12} className="footer-desc">
                대표자 : 신우창 &nbsp;|&nbsp; 이메일 : kidhanssem@naver.com
                &nbsp;|&nbsp; 주소 : 대구 북구 침산남로 48 (노원동)
                &nbsp;|&nbsp; TEL : 053-766-0411 &nbsp;|&nbsp; 사업자등록번호
                503-17-45896 &nbsp;
                <p>Copyright © 2020 Kitchens Co. Ltd. All rights reserved</p>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid container className="footersmall">
            <Grid container item xs={12}>
              <Grid item xs={12}>
                &nbsp;
              </Grid>

              <Grid item xs={2}>
                <Link to="../law1" className="law">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;이용약관
                </Link>
              </Grid>
              <Grid item xs={2}>
                <Link to="../law2" className="law">
                  개인정보처리방침
                </Link>
              </Grid>
              <Grid item xs={2}>
                <Link to="../law3" className="law">
                  이메일무단수집거부
                </Link>
              </Grid>
              <Grid item xs={6}></Grid>
              <Grid item xs={12}>
                &nbsp;
              </Grid>

              <Grid item xs={12} className="footer-descsmall">
                대표자 : 신우창 &nbsp;|&nbsp; 이메일 : kidhanssem@naver.com
                &nbsp;|&nbsp; 주소 : 대구 북구 침산남로 48 (노원동)
                &nbsp;|&nbsp; TEL : 053-766-0411 &nbsp;|&nbsp; 사업자등록번호
                503-17-45896 &nbsp;|&nbsp; <br></br>Copyright © 2020 Kitchens
                Co. Ltd. All rights reserved
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
      </Fragment>
    );
  }
}

export default Footer;
