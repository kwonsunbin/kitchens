import React, { Component, Fragment } from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

class Updatereqform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorName: '',
      password: '',
      title: '',
      content: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
            this.props.onCreate(this.state);

            this.setState({
              title: '',
              content: '',
              password: '',
              authorName: '',
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

  render() {
    return (
      <Fragment>
        <Hidden smDown>
          {' '}
          <Grid item container xs={12} className="urfbox">
            <form onSubmit={this.handleSubmit} className="fullform">
              <Grid item className="h2box" xs={12}>
                <h2 className="tkdeka">게시글 수정하기</h2>
              </Grid>

              <Grid item xs={12}>
                <input
                  className="fullform"
                  placeholder="제목"
                  value={this.state.title}
                  onChange={this.handleChange}
                  id="title"
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  className="fullform"
                  placeholder="작성자"
                  value={this.state.authorName}
                  onChange={this.handleChange}
                  id="authorName"
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  className="fullform"
                  placeholder="비밀번호"
                  value={this.state.password}
                  onChange={this.handleChange}
                  id="password"
                />
              </Grid>

              <Grid item xs={12}>
                <textarea
                  className="ansdmlsodyd"
                  placeholder="1. 성함 2. 연락처 3. 문의 내용 양식으로 작성 부탁드립니다"
                  value={this.state.content}
                  onChange={this.handleChange}
                  id="content"
                />
              </Grid>

              <Grid item xs={12} className="fullform">
                <button className="fullform" type="submit">
                  수정하기
                </button>
              </Grid>
            </form>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid item container xs={12} className="urfbox">
            <form onSubmit={this.handleSubmit} className="fullformsmall">
              <Grid item className="h2box" xs={12}>
                <h2 className="tkdeka">게시글 수정하기</h2>
              </Grid>

              <Grid item xs={12}>
                <input
                  className="fullform"
                  placeholder="제목"
                  value={this.state.title}
                  onChange={this.handleChange}
                  id="title"
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  className="fullform"
                  placeholder="작성자"
                  value={this.state.authorName}
                  onChange={this.handleChange}
                  id="authorName"
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  className="fullform"
                  placeholder="비밀번호"
                  value={this.state.password}
                  onChange={this.handleChange}
                  id="password"
                />
              </Grid>

              <Grid item xs={12}>
                <textarea
                  className="ansdmlsodyd"
                  placeholder="1. 성함 2. 연락처 3. 문의 내용 양식으로 작성 부탁드립니다"
                  value={this.state.content}
                  onChange={this.handleChange}
                  id="content"
                />
              </Grid>

              <Grid item xs={12} className="fullform">
                <button className="fullform" type="submit">
                  수정하기
                </button>
              </Grid>
            </form>
          </Grid>
        </Hidden>
      </Fragment>
    );
  }
}

export default Updatereqform;
