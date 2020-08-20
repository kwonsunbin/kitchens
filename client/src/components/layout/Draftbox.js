import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Draftboxform from './Draftboxform';
import Draftboxformsmall from './Draftboxformsmall';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

class Draftbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorName: '',
      phone: '',
      email: '',
      title: '',
      content: '',
      agreement: '',
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
            <Grid container item xs={3} className="navbar-column">
              <Grid item xs={12} align="center">
                <h2>고객 지원</h2>
                <Grid container item xs={12}>
                  <Grid item xs={12} align="center">
                    <Link to="./notice">공지사항</Link>
                  </Grid>
                  <Grid item xs={12} align="center">
                    <Link to="./draft">상담 및 견적 문의</Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Draftboxform onCreate={this.props.onCreate} />
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid container item xs={12} className="draftboxsmall">
            <Draftboxformsmall onCreate={this.props.onCreate} />
          </Grid>
        </Hidden>
      </Fragment>
    );
  }
}

export default Draftbox;
