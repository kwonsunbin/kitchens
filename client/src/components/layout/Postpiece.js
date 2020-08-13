import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

class Postpiece extends Component {
  render() {
    return (
      <Grid container item xs={12}>
        <Grid item xs={7} align="center">
          <Link to={`./noticepost/${this.props.data._id}`}>
            <p>{this.props.data.title}</p>
          </Link>
        </Grid>
        <Grid item xs={2} align="center">
          <p>{this.props.data.authorName}</p>
        </Grid>
        <Grid item xs={3} align="center">
          <p>{this.props.data.timestamp}</p>
        </Grid>
      </Grid>
    );
  }
}

export default Postpiece;
