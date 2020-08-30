import React, { Component, Fragment } from 'react';
import Icons from './layout/Icons';
import Hidden from '@material-ui/core/Hidden';

class Fixedad extends Component {
  render() {
    return (
      <Fragment>
        <Hidden smDown>
          <div className="ad2">
            <Icons
              path="./icons/naver.png"
              kind="naver"
              ex="키친스 네이버 블로그"
              link="./notice"
            ></Icons>

            <Icons
              path="./icons/instagram.png"
              kind="insta"
              ex="키친스 인스타그램"
              link="./notice"
            ></Icons>
            <Icons
              path="./icons/kakaotalk.png"
              kind="kakao"
              ex="키친스 카카오 채널"
              link="./notice"
            ></Icons>
          </div>

          <div className="ad">
            <h2>전화 문의 및 상담</h2>
            <p>
              <i className="fas fa-phone"></i>
              &nbsp;053-766-4312
              <br></br> <i className="fas fa-mobile-alt"></i>&nbsp;010-2323-1231
              <br></br>
              평일 09:00~18:00 <br></br>
              (주말 / 공휴일 휴뮤)
            </p>
          </div>
        </Hidden>
        <Hidden mdUp>
          <div className="ad2small">
            <Icons
              path="./icons/naver.png"
              kind="naver"
              ex="키친스 네이버 블로그"
              link="http://www.naver.com"
            ></Icons>

            <Icons
              path="./icons/instagram.svg"
              kind="insta"
              ex="키친스 인스타그램"
              link="http://www.instagram.com/"
            ></Icons>
            <Icons
              path="./icons/kakaotalk.png"
              kind="kakao"
              ex="키친스 카카오 채널"
              link="https://www.kakaocorp.com/service/KakaoTalk"
            ></Icons>
          </div>

          <div className="adsmall">
            <h3>전화 문의 및 상담</h3>
            <p>
              <i className="fas fa-phone"></i>
              &nbsp;053-766-4312
              <br></br> <i className="fas fa-mobile-alt"></i>&nbsp;010-2323-1231
              <br></br>
              평일 09:00~18:00 <br></br>
              (주말 / 공휴일 휴뮤)
            </p>
          </div>
        </Hidden>
      </Fragment>
    );
  }
}

export default Fixedad;
