import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

class Postpiecemain extends Component {
  render() {
    return (
      <Grid container item className="postpiecepiece" xs={12}>
        <Grid item xs={9} align="center">
          <Link
            to={`./noticepost/${this.props.data._id}`}
            className="postpiece-main"
          >
            <p>{this.props.data.title}</p>
          </Link>
        </Grid>
        <Grid item xs={3} align="center">
          <p>{this.props.data.timestamp}</p>
        </Grid>
      </Grid>
    );
  }
}

export default Postpiecemain;
