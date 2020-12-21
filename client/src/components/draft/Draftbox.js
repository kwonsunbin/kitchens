import React, { Component, Fragment } from 'react';
import Draftboxform from './Draftboxform';
import Draftboxformsmall from './Draftboxformsmall';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

class Draftbox extends Component {
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
            <Grid item xs={2}></Grid>
            <Grid container item xs={8}>
              <Draftboxform onCreate={this.props.onCreate} />
            </Grid>
            <Grid item xs={2}></Grid>
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
