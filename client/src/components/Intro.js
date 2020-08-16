import React, { Fragment } from 'react';
import Introbox from './layout/Introbox';

import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

const intro = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
      <div className="full">
        <Fragment>
          <Introbox />
        </Fragment>
      </div>
      <Footer></Footer>
    </Fragment>
  );
};

export default intro;
