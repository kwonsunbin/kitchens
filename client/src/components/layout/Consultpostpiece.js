import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

class Consultpostpiece extends Component {
  render() {
    return (
      <Grid container item xs={12} className="postpiecepiece">
        <Grid item xs={6} align="center">
          <Link to={`./consultpost/${this.props.data._id}`}>
            {this.props.data.title}
          </Link>
        </Grid>
        <Grid item xs={2} align="center">
          {this.props.data.answer ? (
            <i className="far fa-circle"></i>
          ) : (
            <i class="fas fa-times"></i>
          )}
        </Grid>
        <Grid item xs={2} align="center">
          {this.props.data.authorName}
        </Grid>
        <Grid item xs={2} align="center">
          {this.props.data.timestamp}
        </Grid>
      </Grid>
    );
  }
}

export default Consultpostpiece;
