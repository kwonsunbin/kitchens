import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Productpiece from './Productpiece';
import uuid from 'uuid';
import Hidden from '@material-ui/core/Hidden';

class Productbox1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: '/api/v1/photos?kind=가',
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
            <Grid container className="forbg">
              <Grid item xs={1}></Grid>
              <Grid item xs={10} align="center">
                <h1>제품 소개</h1>
              </Grid>
              <Grid item xs={1}></Grid>

              <Grid item xs={1}></Grid>

              <Grid item xs={10} align="center">
                <p>키친스가 판매하는 제품들입니다.</p>
                <p>&nbsp;</p>
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid
              container
              item
              xs={10}
              justify="center"
              className="navbar-column"
            >
              <Grid item xs={4} align="center">
                <NavLink
                  to="./product1"
                  activeClassName="active-link"
                  className="navbutton"
                >
                  키친, 싱크대
                </NavLink>
              </Grid>
              <Grid item xs={4} align="center">
                <NavLink
                  to="./product2"
                  activeClassName="active-link"
                  className="navbutton"
                >
                  인테리어
                </NavLink>
              </Grid>
              <Grid item xs={4} align="center">
                <NavLink
                  to="./product3"
                  activeClassName="active-link"
                  className="navbutton"
                >
                  주문 제작가구
                </NavLink>
              </Grid>
              <Grid item xs={12}>
                &nbsp;
              </Grid>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>

            <Grid container item xs={10}>
              {products}
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid container className="pagebox">
            <Grid container className="forbgsmall">
              <Grid item xs={1}></Grid>
              <Grid item xs={10} align="center">
                <h1>제품 소개</h1>
              </Grid>
              <Grid item xs={1}></Grid>

              <Grid item xs={1}></Grid>

              <Grid item xs={10} align="center">
                <p>키친스가 판매하는 제품들입니다.</p>
                <p>&nbsp;</p>
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
            <Grid container item xs={12}>
              {products}
            </Grid>
          </Grid>
        </Hidden>
      </Fragment>
    );
  }
}

export default Productbox1;
