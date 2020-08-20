import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

class Mainbox2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
  }

  componentDidMount() {
    this.setState({
      files: [
        { path: 'mainP1.jpg', title: '키친&싱크대', link: './product1' },
        { path: 'mainP2.jpg', title: '인테리어', link: './product2' },
        { path: 'mainP3.jpg', title: '주문제작가구', link: './product3' },
      ],
    });
  }

  render() {
    const files = this.state.files;

    const parts = files.map((f) => {
      return (
        <Link to={f.link} className="maingalleryphoto" key={uuid()}>
          <div className="smallparent">
            <div>
              <img
                src={'./uploads/' + f.path}
                alt="photos"
                width="100%"
                height="180vw"
              />
            </div>
            <div>
              <Grid container>
                <Grid item xs={12}>
                  <p></p>
                </Grid>
                <Grid item xs={12}>
                  <p></p>
                </Grid>
                <Grid item xs={12}>
                  <p></p>
                </Grid>
                <Grid item xs={12}>
                  <p></p>
                </Grid>
                <Grid item xs={12}>
                  <p></p>
                </Grid>
                <Grid item xs={12}>
                  <p></p>
                </Grid>
                <Grid item xs={12}>
                  <p></p>
                </Grid>
                <Grid item xs={12}>
                  <p></p>
                </Grid>
                <Grid item xs={12}>
                  <p></p>
                </Grid>
                <Grid item xs={12}>
                  <p></p>
                </Grid>
                <Grid item xs={12}>
                  <p></p>
                </Grid>

                <Grid item xs={12} className="descbox" align="center">
                  <p className="m4">{f.title}</p>
                </Grid>
              </Grid>
            </div>
          </div>
        </Link>
      );
    });

    return (
      <Fragment>
        <Hidden smDown>
          <Grid container className="mainbox2">
            <Grid container item xs={4} className="linkbox">
              <Grid container item xs={12} className="linkbox-tel">
                <Grid item xs={12}>
                  <h3 className="m1">A/S, 견적 상담 및 문의</h3>
                </Grid>
                <Grid item xs={12}>
                  <strong>키친스 매장</strong> : 053-766-0411&nbsp;/&nbsp;&nbsp;
                  <strong>휴대폰</strong> : 010-4016-8890<br></br>
                  <strong>이메일</strong> : kidhanssem@naver.com
                  <p className="m1">
                    <strong>영업 시간</strong> : 월~금 09:00 ~ 18:00 (토, 일 및
                    공휴일 휴뮤)
                  </p>
                </Grid>
              </Grid>

              <Grid container item xs={12} className="linkbox2">
                <Link to="./example">
                  <Grid>
                    <h3 className="m1">실제 시공 사례</h3>
                  </Grid>
                  <Grid>
                    <p className="m1">바로가기</p>
                  </Grid>
                </Link>
              </Grid>
              <Grid container item xs={3} className="linkbox2hi">
                <Link to="./intro">
                  <Grid>
                    <h3 className="m1">회사 소개</h3>
                  </Grid>
                  <Grid>
                    <p className="m1">바로가기</p>
                  </Grid>
                </Link>
              </Grid>

              <Grid container item xs={9} className="linkbox2">
                <Link to="./draft">
                  <Fragment>
                    <Grid>
                      <h3 className="m1">온라인 상담 및 문의</h3>
                    </Grid>
                    <Grid>
                      <p className="m1">바로가기</p>
                    </Grid>
                  </Fragment>
                </Link>
              </Grid>
            </Grid>

            <Grid container item xs={8} className="gallery">
              <Grid
                container
                item
                justify="flex-start"
                alignItems="center"
                xs={2}
              >
                <Grid>
                  <Link to="./gallery" className="title-title">
                    제품 소개
                  </Link>
                </Grid>
              </Grid>
              <Grid item xs={8}></Grid>
              <Grid item xs={2} align="end">
                <Link to="./gallery" className="more">
                  더보기
                </Link>
              </Grid>

              <div className="products">
                <ul>
                  <li>{parts[0]}</li>
                  <li>{parts[1]}</li>
                  <li>{parts[2]}</li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid container className="mainbox2small">
            <Grid container item xs={12} className="linkbox">
              <Grid container item xs={12} className="linkbox1">
                <Link to="./example">
                  <Grid>
                    <h3>실제 시공 사례</h3>
                  </Grid>
                  <Grid>
                    <p>바로가기</p>
                  </Grid>
                </Link>
              </Grid>
              <Grid container item xs={12} className="linkbox1s">
                <Grid itemx xs={3}>
                  <Grid>
                    <h3>제품 소개</h3>
                  </Grid>
                </Grid>
                <Grid itemx xs={3} className="hihiroo">
                  <Link to="./example">
                    <Grid>
                      <h3>싱크대, 키친</h3>
                    </Grid>
                    <Grid>
                      <p>바로가기</p>
                    </Grid>
                  </Link>
                </Grid>
                <Grid itemx xs={3} className="hihiroo">
                  <Link to="./example">
                    <Grid>
                      <h3>인테리어</h3>
                    </Grid>
                    <Grid>
                      <p>바로가기</p>
                    </Grid>
                  </Link>
                </Grid>
                <Grid itemx xs={3} className="hihiroo">
                  <Link to="./example">
                    <Grid>
                      <h3>주문제작가구</h3>
                    </Grid>
                    <Grid>
                      <p>바로가기</p>
                    </Grid>
                  </Link>
                </Grid>
              </Grid>
              <Grid container item xs={12} className="linkbox1">
                <Link to="./draft">
                  <Fragment>
                    <Grid>
                      <h3>온라인 상담 및 문의</h3>
                    </Grid>
                    <Grid>
                      <p>바로가기</p>
                    </Grid>
                  </Fragment>
                </Link>
              </Grid>
              <Grid container item xs={12} className="phonenum">
                <Grid item xs={12}>
                  <h3>A/S, 견적 상담 및 문의</h3>
                </Grid>
                <Grid item xs={12}>
                  <p>
                    <strong>키친스 매장</strong> :
                    053-766-0411&nbsp;/&nbsp;&nbsp;
                    <strong>휴대폰</strong> : 010-4016-8890<br></br>
                  </p>
                  <p>
                    <strong>이메일</strong> : kidhanssem@naver.com
                  </p>
                  <p>
                    <strong>영업 시간</strong> : 월~금 09:00 ~ 18:00 (토, 일 및
                    공휴일 휴뮤)
                  </p>
                  <p></p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
      </Fragment>
    );
  }
}

export default Mainbox2;
