import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Carousel from 'react-elastic-carousel';
import uuid from 'uuid';
import Paper from '@material-ui/core/Paper';

class Mainbox6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product1: [{ imgPaths: [''] }, { imgPaths: [''] }, { imgPaths: [''] }],
      product2: [{ imgPaths: [''] }, { imgPaths: [''] }, { imgPaths: [''] }],
      product3: [{ imgPaths: [''] }, { imgPaths: [''] }, { imgPaths: [''] }],
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
          <Grid container spacing={3} className="mainbox6">
            <Grid
              item
              xs={12}
              style={{
                padding: '5vw',
                borderBottom: 'solid 0.02vw #f6f6f6',
              }}
              align="center"
            >
              <h1>제품 소개</h1>
              <p>키친스가 판매하는 제품들입니다.</p>
            </Grid>

            <Grid item xs={12}>
              <Paper spacing={12} elevation={0}>
                <Grid
                  style={{
                    padding: '2vw',
                    borderBottom: 'solid 0.02vw #f6f6f6',
                  }}
                  container
                >
                  <Grid item xs={3} align="center" className="magni2">
                    <Link to="./product1">
                      <h2>키친, 싱크대</h2>
                      <p>
                        <i className="fas fa-search-plus"></i>
                        더보기
                      </p>
                    </Link>
                  </Grid>
                  <Grid container item xs={9}>
                    <Carousel breakPoints={breakPoints}>
                      {this.state.product1.map((product) => (
                        <Link
                          to={`./Imgslide/${product._id}`}
                          className="linkimage"
                          key={uuid()}
                        >
                          <div className="slidebox">
                            <img
                              src={`../uploads/${product.imgPaths[0]}`}
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
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper elevation={0}>
                <Grid
                  container
                  style={{
                    padding: '2vw',
                    borderBottom: 'solid 0.02vw #f6f6f6',
                  }}
                >
                  <Grid item xs={3} align="center" className="magni2">
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
                              src={`../uploads/${product.imgPaths[0]}`}
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
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={0}>
                <Grid
                  style={{
                    padding: '2vw',
                    borderBottom: 'solid 0.02vw #f6f6f6',
                  }}
                  container
                >
                  <Grid item xs={3} align="center" className="magni2">
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
                              src={`../uploads/${product.imgPaths[0]}`}
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
                </Grid>
              </Paper>
            </Grid>

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
            <Grid
              item
              xs={12}
              style={{
                padding: '5vw',
                borderBottom: 'solid 0.02vw #f6f6f6',
              }}
              align="center"
            >
              <h1>제품 소개</h1>
              <p>키친스가 판매하는 제품들입니다.</p>
            </Grid>
            <Grid
              item
              xs={12}
              container
              style={{
                padding: '5vw',
                borderBottom: 'solid 0.02vw #f6f6f6',
              }}
            >
              <Grid item xs={3} align="center" className="magni2small">
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
                          src={`../uploads/${product.imgPaths[0]}`}
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
            </Grid>
            <Grid
              item
              xs={12}
              container
              style={{
                padding: '5vw',
                borderBottom: 'solid 0.02vw #f6f6f6',
              }}
            >
              <Grid item xs={3} align="center" className="magni2small">
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
                          src={`../uploads/${product.imgPaths[0]}`}
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
            </Grid>

            <Grid
              container
              item
              xs={12}
              style={{
                padding: '5vw',
                borderBottom: 'solid 0.02vw #f6f6f6',
              }}
            >
              <Grid item xs={3} align="center" className="magni2small">
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
                          src={`../uploads/${product.imgPaths[0]}`}
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
            </Grid>

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
