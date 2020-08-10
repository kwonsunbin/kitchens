import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-logo">
          <h1>kitchens</h1>
        </div>
        <div className="footer-desc">
          <p>
            대표 : 김학태 / 이메일 : orangemsg@com-home.co.kr 주소 : 서울 송파구
            오금로17길 4 예인빌딩 201호 (방이동) TEL : 1522-8330 / FAX :
            0507-489-3354 <br></br>사업자등록번호 675-87-00464
            통신판매업신고번호 제 2017-서울송파-0641 호
          </p>
          <p>Copyright © 2019 HANSSEM Co. Ltd. All rights reserved</p>
        </div>
      </div>
    );
  }
}

export default Footer;
