import React, { Fragment } from 'react';

import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Law2box from './layout/Law2box';

const Law2 = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
      <div className="full">
        <Fragment>
          <Law2box />
        </Fragment>
      </div>
      <Footer></Footer>
    </Fragment>
  );
};

export default Law2;
