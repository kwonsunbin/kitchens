import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Productpiece from './Productpiece';
import uuid from 'uuid';
import Hidden from '@material-ui/core/Hidden';
import swal from 'sweetalert';
import { confirmAlert } from 'react-confirm-alert'; // Import

class Productbox3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isClicked: false,
      selectedFile: null,
      title: '',
      desc: '',
      kind: '다',
    };
    this.handelToggle = this.handelToggle.bind(this);
    this.handleFileInput = this.handleFileInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handelToggle() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  handleFileInput(e) {
    console.log(e.target.files);
    this.setState({
      selectedFile: e.target.files,
    });
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    confirmAlert({
      title: 'Confirm',
      message: '모든 항목을 정확히 기재하셨나요?',
      buttons: [
        {
          label: '네',
          onClick: () => {
            var formData = new FormData();
            if (
              !this.state.selectedFile ||
              !this.state.title ||
              !this.state.desc ||
              !this.state.kind
            ) {
              swal('빠짐없이 입력해주세요');
              return;
            }
            for (var i = 0; i < this.state.selectedFile.length; i++) {
              formData.append(`files`, this.state.selectedFile[i]);
            }
            formData.append('title', this.state.title);
            formData.append('desc', this.state.desc);
            formData.append('kind', this.state.kind);
            formData.append('price', this.state.price);

            axios({
              method: 'post',
              url: '/api/v1/photos',
              data: formData,
            })
              .then((res) => {
                if (res.status === 200) {
                  swal('등록되었습니다!');
                }
                window.location.reload(true);
              })
              .catch(function (error) {
                if (error.response.status === 403) {
                  swal('로그인 해주세요');
                } else if (error.response) {
                  swal('사진 id를 확인해주세요');
                }
              });
          },
        },
        {
          label: '아니오',
          onClick: () => {
            return;
          },
        },
      ],
    });
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: '/api/v1/photos?kind=다',
    }).then((res) => {
      this.setState({ products: res.data.data });
    });
  }

  render() {
    const products = this.state.products.map((piece) => {
      return <Productpiece data={piece} key={uuid()} />;
    });

    return (
      <Fragment>
        <Hidden smDown>
          <Grid container className="pagebox">
            <Grid container className="forbg">
              <Grid item xs={1}></Grid>
              <Grid item xs={10} align="center">
                <h1>제품 소개</h1>
              </Grid>
              <Grid item xs={1}></Grid>

              <Grid item xs={1}></Grid>

              <Grid item xs={10} align="center">
                <p>키친스가 판매하는 제품들입니다.</p>
                <p>&nbsp;</p>
              </Grid>
              <Grid item xs={1}></Grid>
              {this.props.isLoggedIn ? (
                <Grid container item xs={12}>
                  <Grid item xs={4}></Grid>
                  <Grid item xs={4}>
                    <div
                      className="consultbutton2"
                      onClick={this.handelToggle}
                      style={{ cursor: 'pointer' }}
                    >
                      제품 등록하기
                    </div>
                  </Grid>
                  <Grid item xs={4}></Grid>
                  {this.state.isClicked ? (
                    <Grid container item xs={12} className="hiddenThings">
                      <Grid item xs={2}></Grid>
                      <Grid container item xs={8}>
                        <Grid container item xs={12}>
                          <form
                            encType="multipart/form-data"
                            className="fullform"
                          >
                            <Grid item xs={12}>
                              <input
                                type="file"
                                name="file"
                                multiple
                                onChange={this.handleFileInput}
                                ref="file"
                                className="fullform"
                              />
                            </Grid>

                            <Grid item xs={12}>
                              {' '}
                              <input
                                placeholder="제목"
                                value={this.state.title}
                                onChange={this.handleChange}
                                id="title"
                                className="fullform"
                              />
                            </Grid>

                            <Grid item xs={12}>
                              <textarea
                                placeholder="공사 금액 : 12,000,000 공사 기간 : 2주 공사 구분 : 28평형 아파트 행 구분해서 입력!"
                                value={this.state.desc}
                                onChange={this.handleChange}
                                id="desc"
                                className="fullform"
                              />
                            </Grid>

                            <Grid item xs={12}>
                              <button
                                type="button"
                                onClick={this.handleSubmit}
                                className="fullform"
                              >
                                submit
                              </button>
                            </Grid>
                          </form>
                        </Grid>
                      </Grid>
                      <Grid item xs={2}></Grid>
                    </Grid>
                  ) : (
                    <Fragment></Fragment>
                  )}
                </Grid>
              ) : (
                <Fragment></Fragment>
              )}
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid
              container
              item
              xs={10}
              justify="center"
              className="navbar-column"
            >
              <Grid item xs={4} align="center">
                <NavLink
                  to="./1"
                  activeClassName="active-link"
                  className="navbutton"
                >
                  키친, 싱크대
                </NavLink>
              </Grid>
              <Grid item xs={4} align="center">
                <NavLink
                  to="./2"
                  activeClassName="active-link"
                  className="navbutton"
                >
                  인테리어
                </NavLink>
              </Grid>
              <Grid item xs={4} align="center">
                <NavLink
                  to="./3"
                  activeClassName="active-link"
                  className="navbutton"
                >
                  주문 제작가구
                </NavLink>
              </Grid>
              <Grid item xs={12}>
                &nbsp;
              </Grid>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>

            <Grid container item xs={10}>
              {products}
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid container className="pagebox">
            <Grid container className="forbgsmall">
              <Grid item xs={1}></Grid>
              <Grid item xs={10} align="center">
                <h1>제품 소개</h1>
              </Grid>
              <Grid item xs={1}></Grid>

              <Grid item xs={1}></Grid>

              <Grid item xs={10} align="center">
                <p>키친스가 판매하는 제품들입니다.</p>
              </Grid>
              <Grid item xs={1}></Grid>
              {this.props.isLoggedIn ? (
                <Grid container item xs={12}>
                  <Grid item xs={4}></Grid>
                  <Grid item xs={4}>
                    <div
                      className="consultbutton2small"
                      onClick={this.handelToggle}
                      style={{ cursor: 'pointer' }}
                    >
                      제품 등록하기
                    </div>
                  </Grid>
                  <Grid item xs={4}></Grid>
                  {this.state.isClicked ? (
                    <Grid container item xs={12} className="smallhiddenThings">
                      <Grid item xs={2}></Grid>
                      <Grid container item xs={8}>
                        <Grid container item xs={12}>
                          <form
                            encType="multipart/form-data"
                            className="fullformsmall"
                          >
                            <Grid item xs={12}>
                              <input
                                type="file"
                                name="file"
                                multiple
                                onChange={this.handleFileInput}
                                ref="file"
                                className="fullformsmall"
                              />
                            </Grid>

                            <Grid item xs={12}>
                              {' '}
                              <input
                                placeholder="제목"
                                value={this.state.title}
                                onChange={this.handleChange}
                                id="title"
                                className="fullformsmall"
                              />
                            </Grid>

                            <Grid item xs={12}>
                              <textarea
                                placeholder="공사 금액 : 12,000,000 공사 기간 : 2주 공사 구분 : 28평형 아파트 행 구분해서 입력!"
                                value={this.state.desc}
                                onChange={this.handleChange}
                                id="desc"
                                className="fullformsmall"
                              />
                            </Grid>

                            <Grid item xs={12}>
                              <button
                                type="button"
                                onClick={this.handleSubmit}
                                className="fullformsmall"
                              >
                                submit
                              </button>
                            </Grid>
                          </form>
                        </Grid>
                      </Grid>
                      <Grid item xs={2}></Grid>
                    </Grid>
                  ) : (
                    <Fragment></Fragment>
                  )}
                </Grid>
              ) : (
                <Fragment></Fragment>
              )}
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid
              container
              item
              xs={10}
              justify="center"
              className="navbar-column"
            >
              <Grid item xs={12}>
                &nbsp;
              </Grid>
              <Grid item xs={4} align="center">
                <NavLink
                  to="./1"
                  activeClassName="active-linksmall"
                  className="navbuttonsmall"
                >
                  키친, 싱크대
                </NavLink>
              </Grid>
              <Grid item xs={4} align="center">
                <NavLink
                  to="./2"
                  activeClassName="active-linksmall"
                  className="navbuttonsmall"
                >
                  인테리어
                </NavLink>
              </Grid>
              <Grid item xs={4} align="center">
                <NavLink
                  to="./3"
                  activeClassName="active-linksmall"
                  className="navbuttonsmall"
                >
                  주문 제작가구
                </NavLink>
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
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>

            <Grid container item xs={10}>
              {products}
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </Hidden>
      </Fragment>
    );
  }
}

export default Productbox3;
