import React, { Component, Fragment } from 'react';
import Noticebox from '../components/notice/Noticebox';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Fixedad from '../components/Fixedad';

class Notice extends Component {
  render() {
    return (
      <Fragment>
        <Navbar></Navbar>
        <div className="full">
          <Noticebox isLoggedIn={this.props.isLoggedIn} />
        </div>
        <Footer></Footer>
        <Fixedad></Fixedad>
      </Fragment>
    );
  }
}

export default Notice;
