import React, { Component, Fragment } from 'react';
import Bulletinbox1 from './layout/Bulletinbox1';
import Bulletinbox2 from './layout/Bulletinbox2';

class Bulletin extends Component {
  render() {
    return (
      <Fragment>
        <Bulletinbox1 />
        <Bulletinbox2 />
      </Fragment>
    );
  }
}

export default Bulletin;
