import React, { Component, Fragment } from 'react';
import Mainbox2 from './layout/Mainbox2';
import Mainbox3 from './layout/Mainbox3';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Mainbox2 />
        <Mainbox3 />
      </Fragment>
    );
  }
}

export default Main;
