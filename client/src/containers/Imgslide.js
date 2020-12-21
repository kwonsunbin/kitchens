import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { confirmAlert } from 'react-confirm-alert'; // Import

import swal from 'sweetalert';
import axios from 'axios';

import ImageGallery from 'react-image-gallery';
class Imgslide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      title: '',
      desc: '',
      kind: '라',
      isClicked: false,
      selectedFile: null,
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleFileInput = this.handleFileInput.bind(this);
    this.back = this.back.bind(this);
  }

  handleToggle() {
    this.setState({ isClicked: !this.state.isClicked });
  }
  back() {
    window.history.back();
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleUpdate(e) {
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
              !this.state.kind ||
              !this.state.title ||
              !this.state.desc
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
              method: 'put',
              url: `/api/v1/photos/${this.props.match.params.id}`,
              data: formData,
            })
              .then((res) => {
                if (res.status === 200) {
                  swal('수정되었습니다!');
                }
              })
              .catch(function (error) {
                if (error.response.status === 403) {
                  swal('로그인 해주세요');
                } else if (error.response) {
                  swal('사진 id를 확인해주세요');
                }
              });
            window.location.reload(true);
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

  handleFileInput(e) {
    console.log(e.target.files);
    this.setState({
      selectedFile: e.target.files,
    });
  }

  handleDelete() {
    confirmAlert({
      title: 'Confirm',
      message: '삭제 하시겠습니까?',
      buttons: [
        {
          label: '네',
          onClick: () => {
            axios
              .delete(`/api/v1/photos/${this.props.match.params.id}`)
              .then((res) => {
                console.log(res);
                if (res.status === 200) {
                  swal('삭제 되었습니다');
                  window.history.back();
                }
              })
              .catch(function (error) {
                if (error.response.status === 403) {
                  swal('로그인 해주세요');
                } else if (error.response) {
                  swal('상담글 id를 확인해주세요');
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
    axios.get(`/api/v1/photos/${this.props.match.params.id}`).then((req) => {
      let images = req.data.data.imgPaths.map((p) => {
        return {
          original: `../uploads/${p}`,
          thumbnail: `../uploads/${p}`,
        };
      });
      let title = req.data.data.title;
      let desc = req.data.data.desc;
      this.setState({ images: images, title: title, desc: desc });
    });
  }
  render() {
    return (
      <Fragment>
        <Hidden smDown>
          <Grid
            container
            style={{ backgroundColor: 'black', opacity: '0.8' }}
            alignItems="center"
          >
            <Grid
              container
              style={{ color: 'white', padding: '3vw' }}
              item
              xs={12}
            >
              <Grid item xs={6}>
                <h1>{this.state.title}</h1>
                <pre>{this.state.desc}</pre>
              </Grid>
              <Grid container item xs={6}>
                {this.props.isLoggedIn ? (
                  <Grid container item xs={12}>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={2}>
                      <div
                        className="consultbutton3"
                        onClick={this.handleDelete}
                      >
                        삭제
                      </div>
                    </Grid>
                    <Grid item xs={2}>
                      <div
                        className="consultbutton3"
                        onClick={this.handleToggle}
                      >
                        수정
                      </div>
                    </Grid>
                    <Grid item xs={4}></Grid>
                  </Grid>
                ) : (
                  <Fragment></Fragment>
                )}
                {this.state.isClicked ? (
                  <Grid className="hiddenThings" container>
                    <Grid item xs={2}></Grid>
                    <Grid container item xs={8}>
                      <form encType="multipart/form-data" className="fullform">
                        <Grid item xs={12}>
                          <input
                            placeholder="제목"
                            value={this.state.title}
                            onChange={this.handleChange}
                            className="fullform"
                            id="title"
                          />
                        </Grid>

                        <Grid item xs={12}>
                          <textarea
                            placeholder="설명"
                            value={this.state.desc}
                            onChange={this.handleChange}
                            className="fullform"
                            id="desc"
                          />
                        </Grid>
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
                          <button
                            type="button"
                            className="fullform"
                            onClick={this.handleUpdate}
                          >
                            submit
                          </button>
                        </Grid>
                      </form>
                    </Grid>
                    <Grid item xs={2}></Grid>
                  </Grid>
                ) : (
                  <Fragment></Fragment>
                )}
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <ImageGallery items={this.state.images} />
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid container alignItems="center">
            <Grid item xs={12}>
              &nbsp;
            </Grid>
            {this.props.isLoggedIn ? (
              <Grid container item xs={12}>
                <Grid item xs={4}></Grid>
                <Grid item xs={2}>
                  <div
                    className="consultbutton3small"
                    onClick={this.handleDelete}
                  >
                    삭제
                  </div>
                </Grid>
                <Grid item xs={2}>
                  <div
                    className="consultbutton3small"
                    onClick={this.handleToggle}
                  >
                    수정
                  </div>
                </Grid>
                <Grid item xs={4}></Grid>
              </Grid>
            ) : (
              <Fragment></Fragment>
            )}
            {this.state.isClicked ? (
              <Grid className="hiddenThings" container>
                <Grid item xs={2}></Grid>
                <Grid container item xs={8}>
                  <form encType="multipart/form-data" className="fullform">
                    <Grid item xs={12}>
                      <input
                        placeholder="제목"
                        value={this.state.title}
                        onChange={this.handleChange}
                        className="fullform"
                        id="title"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <textarea
                        placeholder="설명"
                        value={this.state.desc}
                        onChange={this.handleChange}
                        className="fullform"
                        id="desc"
                      />
                    </Grid>
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
                      <button
                        type="button"
                        className="fullform"
                        onClick={this.handleUpdate}
                      >
                        submit
                      </button>
                    </Grid>
                  </form>
                </Grid>
                <Grid item xs={2}></Grid>
              </Grid>
            ) : (
              <Fragment></Fragment>
            )}

            <Grid item xs={12}>
              <ImageGallery items={this.state.images} />
            </Grid>
            <Grid container item xs={12}>
              <Grid container item xs={12} className="picinfozonesmall">
                <Grid item xs={3} align="start">
                  <i
                    className="fas fa-arrow-circle-left"
                    onClick={this.back}
                  ></i>
                </Grid>
                <Grid container item xs={9}>
                  <Grid item xs={12}>
                    <h1>{this.state.title}</h1>
                    <pre>{this.state.desc}</pre>
                  </Grid>
                  <Grid item xs={12}></Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
      </Fragment>
    );
  }
}

export default Imgslide;
