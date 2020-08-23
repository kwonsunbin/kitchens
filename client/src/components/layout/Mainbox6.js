import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Carousel from 'react-elastic-carousel';
import uuid from 'uuid';

class Mainbox6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product1: [{ path: [''] }, { path: [''] }, { path: [''] }],
      product2: [{ path: [''] }, { path: [''] }, { path: [''] }],
      product3: [{ path: [''] }, { path: [''] }, { path: [''] }],
    };
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: '/api/v1/photos?kind=가&limit=10',
    }).then((res) => {
      this.setState({ product1: res.data.data });
    });
    axios({
      method: 'get',
      url: '/api/v1/photos?kind=나&limit=10',
    }).then((res) => {
      this.setState({ product2: res.data.data });
    });
    axios({
      method: 'get',
      url: '/api/v1/photos?kind=다&limit=10',
    }).then((res) => {
      this.setState({ product3: res.data.data });
    });
  }

  render() {
    const breakPoints = [
      { width: 1, itemsToShow: 1 },

      { width: 600, itemsToShow: 3 },
      { width: 1200, itemsToShow: 3 },
    ];
    return (
      <Fragment>
        <Hidden smDown>
          <Grid container className="mainbox6">
            <Grid item xs={12} align="center">
              <h1>제품 소개</h1>
              <p>키친스가 판매하는 제품들입니다.</p>
            </Grid>
            <Grid item xs={12}>
              &nbsp;
            </Grid>
            <Grid item xs={12}>
              &nbsp;
            </Grid>
            <Grid item xs={3} align="center">
              <Link to="./product1">
                <h2>키친, 싱크대</h2>
                <p>
                  <i className="fas fa-search-plus"></i>
                  더보기
                </p>
              </Link>
            </Grid>
            <Grid item xs={9}>
              <Carousel breakPoints={breakPoints}>
                {this.state.product1.map((product) => (
                  <Link
                    to={`./Imgslide/${product._id}`}
                    className="linkimage"
                    key={uuid()}
                  >
                    <div className="slidebox">
                      <img
                        src={`./uploads/${product.path[0]}`}
                        alt="photos"
                        width="100%"
                        height="100%"
                        padding="0.2vw"
                      ></img>

                      <div className="babo">{product.title}</div>
                    </div>
                  </Link>
                ))}
              </Carousel>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <div className="borderline"></div>
            </Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={12}>
              &nbsp;
            </Grid>
            <Grid item xs={12}>
              &nbsp;
            </Grid>
            <Grid item xs={3} align="center">
              <Link to="./product2">
                <h2>인테리어</h2>
                <p>
                  <i className="fas fa-search-plus"></i>
                  더보기
                </p>
              </Link>
            </Grid>
            <Grid item xs={9}>
              <Carousel breakPoints={breakPoints}>
                {this.state.product2.map((product) => (
                  <Link
                    to={`./Imgslide/${product._id}`}
                    className="linkimage"
                    key={uuid()}
                  >
                    <div className="slidebox">
                      <img
                        src={`./uploads/${product.path[0]}`}
                        alt="photos"
                        width="100%"
                        height="100%"
                      ></img>

                      <div className="babo">{product.title}</div>
                    </div>
                  </Link>
                ))}
              </Carousel>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <div className="borderline"></div>
            </Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={12}>
              &nbsp;
            </Grid>
            <Grid item xs={12}>
              &nbsp;
            </Grid>
            <Grid item xs={3} align="center">
              <Link to="./product3">
                <h2 className="m0">주문제작가구</h2>
                <p>
                  <i className="fas fa-search-plus"></i>
                  더보기
                </p>
              </Link>
            </Grid>
            <Grid item xs={9}>
              <Carousel breakPoints={breakPoints}>
                {this.state.product3.map((product) => (
                  <Link
                    to={`./Imgslide/${product._id}`}
                    className="linkimage"
                    key={uuid()}
                  >
                    <div className="slidebox">
                      <img
                        src={`./uploads/${product.path[0]}`}
                        alt="photos"
                        width="100%"
                        height="100%"
                      ></img>

                      <div className="babo">{product.title}</div>
                    </div>
                  </Link>
                ))}
              </Carousel>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <div className="borderline"></div>
            </Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={12}>
              &nbsp;
            </Grid>
            <Grid item xs={12}>
              &nbsp;
            </Grid>
            <Grid item xs={12}>
              &nbsp;
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid container className="mainbox6small">
            <Grid item xs={12} align="center">
              <h1>제품 소개</h1>
              <p>키친스가 판매하는 제품들입니다.</p>
            </Grid>
            <Grid item xs={12}>
              &nbsp;
            </Grid>
            <Grid item xs={12}>
              &nbsp;
            </Grid>
            <Grid item xs={2} align="center">
              <Link to="./product1">
                <h3>키친</h3>
                <p>
                  <i className="fas fa-search-plus"></i>
                  더보기
                </p>
              </Link>
            </Grid>
            <Grid item xs={10}>
              <Carousel breakPoints={breakPoints}>
                {this.state.product1.map((product) => (
                  <Link
                    to={`./Imgslide/${product._id}`}
                    className="linkimage"
                    key={uuid()}
                  >
                    <div className="slideboxsmall">
                      <img
                        src={`./uploads/${product.path[0]}`}
                        alt="photos"
                        width="100%"
                        height="100%"
                      ></img>
                      <div className="babo">{product.title}</div>
                    </div>
                  </Link>
                ))}
              </Carousel>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <div className="borderline"></div>
            </Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={12}>
              &nbsp;
            </Grid>
            <Grid item xs={12}>
              &nbsp;
            </Grid>
            <Grid item xs={2} align="center">
              <Link to="./product2">
                <h3>인테리어</h3>
                <p>
                  <i className="fas fa-search-plus"></i>
                  더보기
                </p>
              </Link>
            </Grid>
            <Grid item xs={10}>
              <Carousel breakPoints={breakPoints}>
                {this.state.product2.map((product) => (
                  <Link
                    to={`./Imgslide/${product._id}`}
                    className="linkimage"
                    key={uuid()}
                  >
                    <div className="slideboxsmall">
                      <img
                        src={`./uploads/${product.path[0]}`}
                        alt="photos"
                        width="100%"
                        height="100%"
                      ></img>
                      <div className="babo">{product.title}</div>
                    </div>
                  </Link>
                ))}
              </Carousel>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <div className="borderline"></div>
            </Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={12}>
              &nbsp;
            </Grid>
            <Grid item xs={12}>
              &nbsp;
            </Grid>
            <Grid item xs={2} align="center">
              <Link to="./product3">
                <h3 className="m0">제작가구</h3>
                <p>
                  <i className="fas fa-search-plus"></i>
                  더보기
                </p>
              </Link>
            </Grid>
            <Grid item xs={10}>
              <Carousel breakPoints={breakPoints}>
                {this.state.product3.map((product) => (
                  <Link
                    to={`./Imgslide/${product._id}`}
                    className="linkimage"
                    key={uuid()}
                  >
                    <div className="slideboxsmall">
                      <img
                        src={`./uploads/${product.path[0]}`}
                        alt="photos"
                        width="100%"
                        height="100%"
                      ></img>
                      <div className="babo">{product.title}</div>
                    </div>
                  </Link>
                ))}
              </Carousel>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <div className="borderline"></div>
            </Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={12}>
              &nbsp;
            </Grid>
            <Grid item xs={12}>
              &nbsp;
            </Grid>
            <Grid item xs={12}>
              &nbsp;
            </Grid>
          </Grid>
        </Hidden>
      </Fragment>
    );
  }
}

export default Mainbox6;
