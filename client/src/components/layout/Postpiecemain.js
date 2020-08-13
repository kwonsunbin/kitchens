import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

class Postpiecemain extends Component {
  render() {
    return (
      <Grid container item className="postpiecepiece" xs={12}>
        <Grid xs={10} align="center">
          <Link to="./noticepost/:id" className="postpiece-main">
            <p>{this.props.data.title}</p>
          </Link>
        </Grid>
        <Grid xs={2} align="center">
          <p>{this.props.data.timestamp}</p>
        </Grid>
      </Grid>
    );
  }
}

export default Postpiecemain;
