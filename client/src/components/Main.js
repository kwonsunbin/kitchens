import React, { Component, Fragment } from 'react';
import Mainbox1 from './layout/Mainbox1';

import Mainbox4 from './layout/Mainbox4';
import Mainbox5 from './layout/Mainbox5';
import Mainbox6 from './layout/Mainbox6';
import Mainbox7 from './layout/Mainbox7';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Modal from './Modal';
import Fixedad from './Fixedad';

class Main extends Component {
  constructor(props) {
    super(props);
    this.getCookie = this.getCookie.bind(this);
    this.setCookie = this.setCookie.bind(this);
    this.state = {
      ad: 'yes',
      setCookie: this.setCookie,
    };
  }

  getCookie() {
    var cookieValue = null;
    if (document.cookie) {
      var array = document.cookie.split(escape('ad') + '=');
      if (array.length >= 2) {
        var arraySub = array[1].split(';');
        cookieValue = unescape(arraySub[0]);
        this.setState({ ad: cookieValue });
      }
    }
  }
  setCookie() {
    document.cookie = 'ad=no; max-age=86400';
  }
  componentDidMount() {
    this.getCookie();
  }
  render() {
    return (
      <Fragment>
        <Navbar></Navbar>
        <Modal ad={this.state.ad} setCookie={this.state.setCookie} />
        <div className="full">
          <Mainbox1 />
          <Mainbox6 />
          <Mainbox7 />
          <Mainbox4 />
          <Mainbox5 />
        </div>
        <Footer></Footer>
        <Fixedad></Fixedad>
      </Fragment>
    );
  }
}

export default Main;
