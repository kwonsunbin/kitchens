import React, { Fragment } from 'react';
import Productbox3 from './layout/Productbox3';

import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Fixedad from './Fixedad';

const Product3 = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
      <div className="full">
        <Fragment>
          <Productbox3 />
        </Fragment>
      </div>
      <Footer></Footer>
      <Fixedad></Fixedad>
    </Fragment>
  );
};

export default Product3;
