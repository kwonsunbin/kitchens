import React, { Component, Fragment } from 'react';
import Noticebox from './layout/Noticebox';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Fixedad from './Fixedad';
class Notice extends Component {
  render() {
    return (
      <Fragment>
        <Navbar></Navbar>
        <div className="full">
          <Noticebox />
        </div>
        <Footer></Footer>
        <Fixedad></Fixedad>
      </Fragment>
    );
  }
}

export default Notice;
