import React, { Component, Fragment } from 'react';
import Mainbox1 from '../components/main/Mainbox1';
import Mainbox4 from '../components/main/Mainbox4';
import Mainbox5 from '../components/main/Mainbox5';
import Mainbox6 from '../components/main/Mainbox6';
import Mainbox7 from '../components/main/Mainbox7';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Modal from './Modal';
import Fixedad from '../components/Fixedad';
import Grid from '@material-ui/core/Grid';
import swal from 'sweetalert';
import { confirmAlert } from 'react-confirm-alert'; // Import
import axios from 'axios';
import Hidden from '@material-ui/core/Hidden';

class Main extends Component {
  constructor(props) {
    super(props);
    this.getCookie = this.getCookie.bind(this);
    this.setCookie = this.setCookie.bind(this);
    this.handelToggle = this.handelToggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      ad: 'yes',
      setCookie: this.setCookie,
      isClicked: false,
      desc: '',
      link: '',
      curdesc: '',
      curlink: '',
      show: '',
      curshow: '',
    };
  }
  handelToggle() {
    this.setState({ isClicked: !this.state.isClicked });
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
            axios({
              method: 'put',
              url: '/api/v1/events',
              data: {
                desc: this.state.desc,
                eventPath: this.state.link,
                show: this.state.show,
              },
            })
              .then((res) => {
                if (res.status === 200) {
                  swal('수정되었습니다!');
                }
                window.location.reload(true);
              })
              .catch(function (error) {
                swal('에러');
              });

            this.setState({
              desc: '',
              link: '',
              show: '',
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

  getCookie() {
    var cookieValue = null;
    if (document.cookie) {
      var array = document.cookie.split(escape('ad') + '=');
      if (array.length >= 2) {
        var arraySub = array[1].split(';');
        cookieValue = unescape(arraySub[0]);
        this.setState({ ad: cookieValue });
      }
    }
  }
  setCookie() {
    document.cookie = 'ad=no; max-age=86400';
  }
  componentDidMount() {
    this.getCookie();
    //axios.get('/api/v1/events').then((res) => {
    //   this.setState({
    //     curdesc: res.data.data.desc,
    //     curlink: res.data.data.eventPath,
    //     curshow: res.data.data.show,
    //   });
    // });
  }
  render() {
    return (
      <Fragment>
        <Hidden smDown>
          <Navbar></Navbar>

          <Modal
            ad={this.state.ad}
            desc={this.state.curdesc}
            link={this.state.curlink}
            show={this.state.curshow}
            setCookie={this.state.setCookie}
          />
          <div className="full">
            <Mainbox1 />
            <Mainbox6 />
            <Mainbox7 />
            <Mainbox4 />
            <Mainbox5 />
          </div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          {this.props.isLoggedIn ? (
            <Grid container className="hiddenThings">
              <Grid item xs={3}></Grid>
              <Grid item xs={6}>
                <button className="consultbutton2" onClick={this.handelToggle}>
                  팝업 관리
                </button>
              </Grid>
              <Grid item xs={3}></Grid>
              {this.state.isClicked ? (
                <Fragment>
                  <Grid item xs={3}></Grid>

                  <Grid item container xs={6}>
                    <form onSubmit={this.handleSubmit} className="fullform">
                      <Grid item xs={12}>
                        <input
                          className="fullform"
                          placeholder="내용"
                          value={this.state.desc}
                          onChange={this.handleChange}
                          id="desc"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <input
                          className="fullform"
                          placeholder="링크"
                          value={this.state.link}
                          onChange={this.handleChange}
                          id="link"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <input
                          className="fullform"
                          placeholder="팝업 띄우기 yes / no 입력"
                          value={this.state.show}
                          onChange={this.handleChange}
                          id="show"
                        />
                      </Grid>

                      <Grid item xs={12} className="fullform">
                        <button className="fullform" type="submit">
                          작성하기
                        </button>
                      </Grid>
                    </form>
                  </Grid>
                  <Grid item xs={3}></Grid>
                </Fragment>
              ) : (
                <Fragment></Fragment>
              )}
            </Grid>
          ) : (
            <Fragment></Fragment>
          )}
          <Footer></Footer>
          <Fixedad></Fixedad>
        </Hidden>
        <Hidden mdUp>
          <Navbar></Navbar>

          <Modal
            ad={this.state.ad}
            desc={this.state.curdesc}
            link={this.state.curlink}
            show={this.state.curshow}
            setCookie={this.state.setCookie}
          />
          <div className="full">
            <Mainbox1 />
            <Mainbox6 />
            <Mainbox7 />
            <Mainbox4 />
            <Mainbox5 />
          </div>
          {this.props.isLoggedIn ? (
            <Grid container className="smallhiddenThings">
              <Grid item xs={12}>
                <button
                  className="smallconsultbutton2"
                  onClick={this.handelToggle}
                >
                  팝업 관리
                </button>
              </Grid>
              {this.state.isClicked ? (
                <Fragment>
                  <Grid item container xs={12}>
                    <form
                      onSubmit={this.handleSubmit}
                      className="fullformsmall"
                    >
                      <Grid item xs={12}>
                        <input
                          className="fullformsmall"
                          placeholder="내용"
                          value={this.state.desc}
                          onChange={this.handleChange}
                          id="desc"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <input
                          className="fullformsmall"
                          placeholder="링크"
                          value={this.state.link}
                          onChange={this.handleChange}
                          id="link"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <input
                          className="fullformsmall"
                          placeholder="팝업 띄우기 yes / no 입력"
                          value={this.state.show}
                          onChange={this.handleChange}
                          id="show"
                        />
                      </Grid>

                      <Grid item xs={12} className="fullformsmall">
                        <button className="fullformsmall" type="submit">
                          작성하기
                        </button>
                      </Grid>
                    </form>
                  </Grid>
                </Fragment>
              ) : (
                <Fragment></Fragment>
              )}
            </Grid>
          ) : (
            <Fragment></Fragment>
          )}
          <Footer></Footer>
          <Fixedad></Fixedad>
        </Hidden>
      </Fragment>
    );
  }
}

export default Main;
