import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RenderAfterNavermapsLoaded } from 'react-naver-maps';
import Mapbox2naver from './Mapbox2naver';

class Mapbox2 extends Component {
  render() {
    return (
      <div className="postcontentmainbox">
        <div className="navbar-column">
          <h2>회사 소개</h2>
          <ul>
            <Link to="./intro">회사 소개</Link>
            <Link to="./map">오시는 길</Link>
          </ul>
        </div>
        <div className="mapmainbox">
          <RenderAfterNavermapsLoaded
            ncpClientId={'vw4iuq2zy5'} // 자신의 네이버 계정에서 발급받은 Client ID
            error={<p>Maps Load Error</p>}
            loading={<p>Maps Loading...</p>}
          >
            <Mapbox2naver />
          </RenderAfterNavermapsLoaded>

          <div className="map-descbox">
            <h1>오시는 길</h1>
            <div>
              <br></br>
              <h2>지하철 3호선 이용 시</h2>
              <p>
                원대역 1번 출구 700m 도보 10분 <br></br> 북구청역 2번 출구 750m
                도보 11분
              </p>
              <h2>버스 이용 시</h2>
              <p>
                719, 730, 순환 2-1 <br></br>: 북침산치안센터앞 정류장 하차 후
                도보 2분
              </p>
              <h2>차량 이용 시</h2>
              <p> 건물 앞 지상 전용 주차장 이용</p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mapbox2;
