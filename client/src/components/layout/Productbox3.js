import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Productpiece from './Productpiece';
import uuid from 'uuid';
import Hidden from '@material-ui/core/Hidden';

class Productbox3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: '/api/v1/photos?kind=다',
    }).then((res) => {
      this.setState({ products: res.data.data });
    });
  }

  render() {
    const products = this.state.products.map((piece) => {
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
                <h2>제품 소개</h2>
                <Grid align="center">
                  <Link to="./product1">키친, 싱크대</Link>
                </Grid>
                <Grid align="center">
                  <Link to="./product2">인테리어</Link>
                </Grid>
                <Grid align="center">
                  <Link to="./product3">주문 제작가구</Link>
                </Grid>
              </Grid>
            </Grid>

            <Grid container item xs={10}>
              {products}
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid container className="pagebox">
            <Grid container item xs={12}>
              {products}
            </Grid>
          </Grid>
        </Hidden>
      </Fragment>
    );
  }
}

export default Productbox3;
