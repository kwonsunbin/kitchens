import React, { Fragment } from 'react';
import Productbox2 from './layout/Productbox2';

import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

const Product2 = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
      <div className="full">
        <Fragment>
          <Productbox2 />
        </Fragment>
      </div>
      <Footer></Footer>
    </Fragment>
  );
};

export default Product2;
