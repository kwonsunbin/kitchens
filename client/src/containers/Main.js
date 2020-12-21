import React, { Component, Fragment } from 'react';
import Mainbox1 from '../components/main/Mainbox1';
import Mainbox4 from '../components/main/Mainbox4';
import Mainbox5 from '../components/main/Mainbox5';
import Mainbox6 from '../components/main/Mainbox6';
import Mainbox7 from '../components/main/Mainbox7';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Fixedad from '../components/Fixedad';
import Hidden from '@material-ui/core/Hidden';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Hidden smDown>
          <Navbar></Navbar>

          <div className="full">
            <Mainbox1 />
            <Mainbox6 />
            <Mainbox7 />
            <Mainbox4 />
            <Mainbox5 />
          </div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>

          <Footer></Footer>
          <Fixedad></Fixedad>
        </Hidden>
        <Hidden mdUp>
          <Navbar></Navbar>

          <div className="full">
            <Mainbox1 />
            <Mainbox6 />
            <Mainbox7 />
            <Mainbox4 />
            <Mainbox5 />
          </div>

          <Footer></Footer>
          <Fixedad></Fixedad>
        </Hidden>
      </Fragment>
    );
  }
}

export default Main;
