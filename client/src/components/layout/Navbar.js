import React, { Component, Fragment } from 'react';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = function () {
    if (this.state.isClicked) {
      this.setState({ isClicked: false });
    } else {
      this.setState({ isClicked: true });
    }
  };

  render() {
    return (
      <Fragment>
        <Hidden smDown>
          <Fragment>
            <Grid container className="navbar-row" onClick={this.handleClick}>
              <Grid item xs={3} className="logo">
                <Link to="../">
                  <p className="navbarLogo">Kitchens</p>
                </Link>
              </Grid>
              <Grid
                container
                item
                xs={9}
                direction="row"
                justify="flex-end"
                alignItems="center"
                className="navbarp"
              >
                <Grid item xs={2} align="center">
                  <p>회사 소개</p>
                </Grid>
                <Grid item xs={2} align="center">
                  <p>제품 소개</p>
                </Grid>
                <Grid item xs={2} align="center">
                  <p>꾸밈 사례</p>
                </Grid>
                <Grid item xs={2} align="center">
                  <p>고객지원</p>
                </Grid>
              </Grid>
            </Grid>
            <Dropdown clicked={this.state.isClicked} />
          </Fragment>
        </Hidden>
        <Hidden mdUp>
          <Fragment>
            <Grid container className="smallnavbar" onClick={this.handleClick}>
              <Grid item xs={3} className="logo">
                <Link to="../">
                  <p className="navbarLogo">Kitchens</p>
                </Link>
              </Grid>
              <Grid item xs={8}></Grid>
              <Grid item xs={1} align="center">
                <p>
                  <i className="fas fa-bars"></i>
                </p>
              </Grid>
            </Grid>
            <Dropdown clicked={this.state.isClicked} />
          </Fragment>
        </Hidden>
      </Fragment>
    );
  }
}

export default Navbar;
