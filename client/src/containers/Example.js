import React, { Fragment, Component } from 'react';
import Examplebox from '../components/example/Examplebox';

import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Fixedad from '../components/Fixedad';

class Example extends Component {
  render() {
    return (
      <Fragment>
        <Navbar></Navbar>
        <div className="full">
          <Fragment>
            <Examplebox isLoggedIn={this.props.isLoggedIn} />
          </Fragment>
        </div>
        <Footer></Footer>
        <Fixedad></Fixedad>
      </Fragment>
    );
  }
}

export default Example;
