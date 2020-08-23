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
              <Grid item xs={5}></Grid>
              <Grid item xs={1}>
                <Link to="naver">
                  <img
                    src="./uploads/navericon.svg"
                    alt="icons"
                    className="icons"
                  ></img>
                </Link>
                <Link to="instagram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5vw"
                    height="1.5vw"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
              </Grid>
              <Grid item xs={1}>
                <Link to="kakaotalk">
                  <img
                    src="./uploads/kakaotalk.svg"
                    alt="icons"
                    className="icons"
                  ></img>
                </Link>
              </Grid>
              <Grid item xs={2} className="bigphone">
                <i className="fas fa-phone"></i>
                &nbsp;053-766-0411
              </Grid>
              <Grid item xs={6}>
                영업 시간 : 월~금 09:00 ~ 18:00 (토, 일 및 공휴일 휴뮤)
              </Grid>
              <Grid item xs={4}></Grid>
              <Grid item xs={12} className="footer-desc">
                대표자 : 신우창 &nbsp;|&nbsp; 이메일 : kidhanssem@naver.com
                &nbsp;|&nbsp; 주소 : 대구 북구 침산남로 48 (노원동)
                &nbsp;|&nbsp; TEL : 053-766-0411 &nbsp;|&nbsp; 사업자등록번호
                503-17-45896 &nbsp;|&nbsp;{' '}
                <a href="www.naver.com">사업자정보확인</a>
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
              <Grid item xs={3}></Grid>
              <Grid item xs={1}>
                <Link to="naver">
                  <img
                    src="./uploads/navericon.svg"
                    alt="icons"
                    className="iconssmall"
                  ></img>
                </Link>
              </Grid>
              <Grid item xs={1}>
                {' '}
                <Link to="instagram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3vw"
                    height="3vw"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
              </Grid>
              <Grid item xs={1}>
                <Link to="kakaotalk">
                  <img
                    src="./uploads/kakaotalk.svg"
                    alt="icons"
                    className="iconssmall"
                  ></img>
                </Link>
              </Grid>
              <Grid item xs={3} className="smallphone">
                &nbsp;&nbsp;&nbsp;<i className="fas fa-phone"></i>
                &nbsp;053-766-0411
              </Grid>
              <Grid item xs={9}>
                영업 시간 : 월~금 09:00 ~ 18:00 (토, 일 및 공휴일 휴뮤)
              </Grid>
              <Grid item xs={12} className="footer-descsmall">
                대표자 : 신우창 &nbsp;|&nbsp; 이메일 : kidhanssem@naver.com
                &nbsp;|&nbsp; 주소 : 대구 북구 침산남로 48 (노원동)
                &nbsp;|&nbsp; TEL : 053-766-0411 &nbsp;|&nbsp; 사업자등록번호
                503-17-45896 &nbsp;|&nbsp;{' '}
                <a href="www.naver.com">사업자정보확인</a>
                <br></br>Copyright © 2020 Kitchens Co. Ltd. All rights reserved
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
      </Fragment>
    );
  }
}

export default Footer;
