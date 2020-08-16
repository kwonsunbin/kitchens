import React, { Component, Fragment } from 'react';
import Noticebox from './layout/Noticebox';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

class Notice extends Component {
  render() {
    return (
      <Fragment>
        <Navbar></Navbar>
        <div className="full">
          <Noticebox />
        </div>
        <Footer></Footer>
      </Fragment>
    );
  }
}

export default Notice;
