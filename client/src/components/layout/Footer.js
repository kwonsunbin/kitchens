import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class Footer extends Component {
  render() {
    return (
      <Grid container className="footer">
        <Grid item xs={2} className="footer-logo">
          <p>kitchens </p>
        </Grid>
        <Grid item xs={10} className="footer-desc">
          <p>
            대표 : 신우창 / 이메일 : orangemsg@com-home.co.kr 주소 : 대구 북구
            침산남로 48 (노원동) TEL : 1522-8330 / FAX : 0507-489-3354
            사업자등록번호 675-87-00464
          </p>
          <p>Copyright © 2019 Kitchens Co. Ltd. All rights reserved</p>
        </Grid>
      </Grid>
    );
  }
}

export default Footer;
