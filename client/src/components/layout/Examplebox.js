import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Productpiece from './Productpiece';
import uuid from 'uuid';
import Hidden from '@material-ui/core/Hidden';

class Examplebox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      examples: [],
    };
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: '/api/v1/photos?kind=라',
    }).then((res) => {
      this.setState({ examples: res.data.data });
    });
  }

  render() {
    const examples = this.state.examples.map((piece) => {
      return <Productpiece data={piece} key={uuid()} />;
    });

    return (
      <Fragment>
        <Hidden smDown>
          <Grid container className="pagebox">
            <Grid container className="forbg">
              <Grid item xs={1}></Grid>
              <Grid item xs={10} align="center">
                <h1>실제 시공 사례</h1>
              </Grid>
              <Grid item xs={1}></Grid>

              <Grid item xs={1}></Grid>

              <Grid item xs={10} align="center">
                <p>키친스가 직접 시공한 결과물입니다.</p>
                <p>&nbsp;</p>
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid container item xs={10}>
              {examples}
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid container className="pagebox">
            <Grid container className="forbgsmall">
              <Grid item xs={1}></Grid>
              <Grid item xs={10} align="center">
                <h1>실제 시공 사례</h1>
              </Grid>
              <Grid item xs={1}></Grid>

              <Grid item xs={1}></Grid>

              <Grid item xs={10} align="center">
                <p>키친스가 직접 시공한 결과물입니다.</p>
                <p>&nbsp;</p>
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
            <Grid container item xs={12}>
              {examples}
            </Grid>
          </Grid>
        </Hidden>
      </Fragment>
    );
  }
}

export default Examplebox;
