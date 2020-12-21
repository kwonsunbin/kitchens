import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

class Mainbox1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainPhoto: [{ imgPaths: [''] }, { imgPaths: [''] }, { imgPaths: [''] }],
    };
  }

  render() {
    return (
      <Fragment>
        <Hidden smDown>
          <Grid container className="mainbox1">
            <Grid item xs={12}>
              <div className="slidebox">
                <img src={`../imgs/main.jpg`} alt="photos" width="100%"></img>
              </div>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid container className="mainbox1">
            <Grid item xs={12}>
              <div className="slidebox">
                <img src={`../imgs/main.jpg`} alt="photos" width="100%"></img>
              </div>
            </Grid>
          </Grid>
        </Hidden>
      </Fragment>
    );
  }
}

export default Mainbox1;
