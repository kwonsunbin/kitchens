import React, { Component, Fragment } from 'react';
import Updatereqform from './Updatereqform';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

class Updatereqbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorName: '',
      password: '',
      title: '',
      content: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <Fragment>
        <Hidden smDown>
          <Grid container justify="center" className="draftbox">
            <Grid container className="forbg">
              <Grid item xs={1}></Grid>
              <Grid item xs={10} align="center">
                <h1>견적 문의 및 상담</h1>
              </Grid>
              <Grid item xs={1}></Grid>

              <Grid item xs={1}></Grid>

              <Grid item xs={10} align="center">
                <p>
                  견적 문의, AS 요청, 방문 상담 신청에 관한 글을 자유롭게
                  작성하는 곳 입니다.
                </p>
                <p>&nbsp;</p>
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid container item xs={8}>
              <Updatereqform onCreate={this.props.onCreate} />
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid container item xs={12} className="draftboxsmall">
            <Grid container className="forbgsmall">
              <Grid item xs={1}></Grid>
              <Grid item xs={10} align="center">
                <h1>견적 문의 및 상담</h1>
              </Grid>
              <Grid item xs={1}></Grid>

              <Grid item xs={1}></Grid>

              <Grid item xs={10} align="center">
                <p>
                  견적 문의, AS 요청, 방문 상담 신청에 관한 글을 자유롭게
                  작성하는 곳 입니다.
                </p>
                <p>&nbsp;</p>
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
            <Grid container justify="center" className="draftbox">
              <Grid item xs={2}></Grid>
              <Grid container item xs={8}>
                <Updatereqform onCreate={this.props.onCreate} />
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          </Grid>
        </Hidden>
      </Fragment>
    );
  }
}

export default Updatereqbox;
