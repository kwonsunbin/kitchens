import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Postpiecemain from './Postpiecemain';
import axios from 'axios';
import uuid from 'react-uuid';
import { RenderAfterNavermapsLoaded } from 'react-naver-maps';

import Mapbox2naver from './Mapbox2naver';

class Mainbox3 extends Component {
  constructor(props) {
    super(props);
    this.state = { data: { data: [0, 1, 2, 3, 4] } };
  }
  componentDidMount() {
    axios
      .get('http://localhost:8080/api/v1/notices?page=1&limit=5')
      .then((response) => {
        this.setState({ data: response.data });
      });
  }

  render() {
    const list = this.state.data.data.map((piece) => {
      return <Postpiecemain data={piece} key={uuid()} />;
    });

    return (
      <div className="mainbox3">
        <div className="notice">
          <div className="notice-title">
            <Link to="./notice">공지사항</Link>
            <Link to="./notice" className="notice-title-more">
              더보기
            </Link>
          </div>

          <ul>{list}</ul>
        </div>
        <div className="way">
          <RenderAfterNavermapsLoaded
            ncpClientId={'vw4iuq2zy5'} // 자신의 네이버 계정에서 발급받은 Client ID
            error={<p>Maps Load Error</p>}
            loading={<p>Maps Loading...</p>}
          >
            <Mapbox2naver />
          </RenderAfterNavermapsLoaded>

          <div className="way-desc">
            <Link to="./map" className="way-description">
              <h2>오시는 길</h2>
              <h3>대구광역시 북구 침산남로 48 </h3>
              <p>지번 : 노원동 1가 9-15 (우) 41589</p>
            </Link>
            <div className="phonenum">
              <h2>연락처 및 이메일</h2>
              <p>
                사번 : 053-951-2476 <br></br> 핸드폰 : 010-2321-2551
              </p>
              <p>이메일 : sunbin1696@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mainbox3;
