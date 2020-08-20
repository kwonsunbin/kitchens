import React, { Fragment } from 'react';

import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Law3box from './layout/Law3box';

const Law3 = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
      <div className="full">
        <Fragment>
          <Law3box />
        </Fragment>
      </div>
      <Footer></Footer>
    </Fragment>
  );
};

export default Law3;
