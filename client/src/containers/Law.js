import React, { Component, Fragment } from 'react';

import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Law1box from '../components/law/Law1box';
import Law2box from '../components/law/Law2box';
import Law3box from '../components/law/Law3box';

class Law extends Component {
  render() {
    let law;
    if (this.props.match.params.id === 1) {
      law = <Law1box />;
    } else if (this.props.match.params.id === 2) {
      law = <Law2box />;
    } else {
      law = <Law3box />;
    }
    return (
      <Fragment>
        <Navbar></Navbar>
        <div className="full">
          <Fragment>{law}</Fragment>
        </div>
        <Footer></Footer>
      </Fragment>
    );
  }
}

export default Law;
