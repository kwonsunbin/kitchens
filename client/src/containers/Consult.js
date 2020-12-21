import React, { Component, Fragment } from 'react';
import Consultbox from '../components/consult/Consultbox';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Fixedad from '../components/Fixedad';

class Consult extends Component {
  render() {
    return (
      <Fragment>
        <Navbar></Navbar>
        <div className="full">
          <Consultbox />
        </div>
        <Footer></Footer>
        <Fixedad></Fixedad>
      </Fragment>
    );
  }
}

export default Consult;
