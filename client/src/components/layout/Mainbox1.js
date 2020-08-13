import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class Mainbox1 extends Component {
  render() {
    return (
      <Grid container className="mainbox1">
        <Grid item xs={12}>
          <img src="./gallery1.jpg" width="100%" height="auto" alt="bookcase" />
        </Grid>
      </Grid>
    );
  }
}

export default Mainbox1;
