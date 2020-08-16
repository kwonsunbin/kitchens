import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

class Postpiecemain extends Component {
  render() {
    return (
      <Grid container item className="postpiecepiece" xs={12}>
        <Grid item xs={10} align="center">
          <Link
            to={`./noticepost/${this.props.data._id}`}
            className="postpiece-main"
          >
            {this.props.data.title}
          </Link>
        </Grid>
        <Grid item xs={2} align="center">
          {this.props.data.timestamp}
        </Grid>
      </Grid>
    );
  }
}

export default Postpiecemain;
