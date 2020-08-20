import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
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
            <Grid
              container
              item
              xs={2}
              justify="center"
              className="navbar-column"
            >
              <Grid container item xs={12} direction="column" align="center">
                <h2>꾸밈 사례</h2>
                <Grid align="center">
                  <Link to="./example">실제 시공 사례</Link>
                </Grid>
              </Grid>
            </Grid>

            <Grid container item xs={10}>
              {examples}
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid container className="pagebox">
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
