import React, { Fragment } from 'react';
import Productbox1 from './layout/Productbox1';

import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Fixedad from './Fixedad';
const Product1 = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
      <div className="full">
        <Fragment>
          <Productbox1 />
        </Fragment>
      </div>
      <Footer></Footer>
      <Fixedad></Fixedad>
    </Fragment>
  );
};

export default Product1;
