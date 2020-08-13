import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

class Postpiece extends Component {
  render() {
    return (
      <Grid container item xs={12} className="postpiecepiece">
        <Grid item xs={7} align="center">
          <Link to={`./noticepost/${this.props.data._id}`}>
            {this.props.data.title}
          </Link>
        </Grid>
        <Grid item xs={2} align="center">
          {this.props.data.authorName}
        </Grid>
        <Grid item xs={3} align="center">
          {this.props.data.timestamp}
        </Grid>
      </Grid>
    );
  }
}

export default Postpiece;
