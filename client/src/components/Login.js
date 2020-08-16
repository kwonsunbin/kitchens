import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import swal from 'sweetalert';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.handleLogin(this.state);
  }

  handleLogin(data) {
    axios({
      method: 'post',
      url: '/api/v1/login',
      data: data,
    })
      .then((res) => {
        console.log(res);
        swal('로그인 되었습니다');
        window.location.replace('../manage');
      })
      .catch(function (error) {
        if (error.response) {
          swal('아이디와 비밀번호를 확인해주세요');
        }
      });
  }

  render() {
    return (
      <Grid container className="full">
        <Grid container item xs={12} justify="center">
          <form onSubmit={this.handleSubmit}>
            <Grid item xs={12}>
              <h2>로그인</h2>
            </Grid>

            <Grid item xs={12}>
              <input
                className="username"
                placeholder="아이디"
                value={this.state.username}
                onChange={this.handleChange}
                width="100%"
                id="username"
              />
            </Grid>

            <Grid item xs={12}>
              <input
                className="password"
                placeholder="비밀번호"
                value={this.state.password}
                onChange={this.handleChange}
                width="100%"
                id="password"
              />
            </Grid>
            <Grid item xs={12}>
              <button className="fullform" type="submit">
                로그인하기
              </button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    );
  }
}

export default Login;
