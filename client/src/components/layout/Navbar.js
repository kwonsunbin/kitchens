import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState({ isClicked: !this.state.isClicked });
  }
  render() {
    return (
      <Fragment>
        <Hidden smDown>
          <Fragment>
            <Grid container className="navbar-row" onClick={this.handleClick}>
              <Grid item xs={3} className="logo">
                <NavLink to="../">
                  <p className="navbarLogo">Kitchens</p>
                </NavLink>
              </Grid>
              <Grid
                container
                item
                xs={9}
                spacing={2}
                direction="row"
                justify="flex-end"
                alignItems="center"
                className="navbarp"
              >
                <Grid item xs={2} align="center" className="navBut">
                  <NavLink
                    activeClassName="active-link"
                    className="navbutton"
                    to="../product1"
                    style={{ cursor: 'pointer' }}
                  >
                    제품 소개
                  </NavLink>
                </Grid>
                <Grid item xs={2} align="center" className="navBut">
                  <NavLink
                    activeClassName="active-link"
                    className="navbutton"
                    to="../example"
                    style={{ cursor: 'pointer' }}
                  >
                    시공 사례
                  </NavLink>
                </Grid>
                <Grid item xs={2} align="center" className="navBut">
                  <NavLink
                    activeClassName="active-link"
                    className="navbutton"
                    to="../consult"
                  >
                    견적 상담
                  </NavLink>
                </Grid>
                <Grid item xs={2} align="center" className="navBut">
                  <NavLink
                    activeClassName="active-link"
                    className="navbutton"
                    to="../notice"
                    style={{ cursor: 'pointer' }}
                  >
                    공지 사항
                  </NavLink>
                </Grid>
                <Grid
                  item
                  activeClassName="active-link"
                  xs={2}
                  align="center"
                  className="navBut"
                >
                  <NavLink
                    activeClassName="active-link"
                    className="navbutton"
                    to="../map"
                    style={{ cursor: 'pointer' }}
                  >
                    오시는 길
                  </NavLink>
                </Grid>
                <Grid item xs={2} align="center" className="navBut">
                  <NavLink
                    activeClassName="active-link"
                    className="navbutton"
                    to="../intro"
                    style={{ cursor: 'pointer' }}
                  >
                    회사 소개
                  </NavLink>
                </Grid>
              </Grid>
            </Grid>
          </Fragment>
        </Hidden>
        <Hidden mdUp>
          <Fragment>
            <Grid container className="smallnavbar">
              <Grid item xs={3} className="logo">
                <NavLink to="../">
                  <p className="navbarLogo">Kitchens</p>
                </NavLink>
              </Grid>
              <Grid item xs={8}></Grid>
              <Grid item xs={1} align="center">
                <p>
                  <i className="fas fa-bars" onClick={this.handleToggle}></i>
                </p>
              </Grid>
            </Grid>
            <Grid contianer className="navSmall">
              {this.state.isClicked ? (
                <Fragment>
                  <Grid item xs={12} align="center" className="navOne">
                    <Link to="../product1">제품 소개</Link>
                  </Grid>
                  <Grid item xs={12} align="center" className="navOne">
                    <Link to="../example">시공 사례</Link>
                  </Grid>
                  <Grid item xs={12} align="center" className="navOne">
                    <Link to="../consult">견적 상담</Link>
                  </Grid>
                  <Grid item xs={12} align="center" className="navOne">
                    <Link to="../notice">공지 사항</Link>
                  </Grid>
                  <Grid item xs={12} align="center" className="navOne">
                    <Link to="../map">오시는 길</Link>
                  </Grid>
                  <Grid item xs={12} align="center" className="navOne">
                    <Link to="../intro">회사 소개</Link>
                  </Grid>
                </Fragment>
              ) : (
                <Fragment></Fragment>
              )}
            </Grid>
          </Fragment>
        </Hidden>
      </Fragment>
    );
  }
}

export default Navbar;
