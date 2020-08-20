import React, { Fragment } from 'react';

import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Law1box from './layout/Law1box';

const Law1 = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
      <div className="full">
        <Fragment>
          <Law1box />
        </Fragment>
      </div>
      <Footer></Footer>
    </Fragment>
  );
};

export default Law1;
