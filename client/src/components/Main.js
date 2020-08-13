import React, { Component, Fragment } from 'react';
import Mainbox1 from './layout/Mainbox1';
import Mainbox2 from './layout/Mainbox2';
import Mainbox3 from './layout/Mainbox3';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Mainbox1 />
        <Mainbox2 />
        <Mainbox3 />
      </Fragment>
    );
  }
}

export default Main;
