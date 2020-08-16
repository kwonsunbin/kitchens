import React, { Component, Fragment } from 'react';
import Mainbox1 from './layout/Mainbox1';
import Mainbox2 from './layout/Mainbox2';
import Mainbox3 from './layout/Mainbox3';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Navbar></Navbar>
        <div className="full">
          <Mainbox1 />
          <Mainbox2 />
          <Mainbox3 />
        </div>
        <Footer></Footer>
      </Fragment>
    );
  }
}

export default Main;
