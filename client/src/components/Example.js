import React, { Fragment } from 'react';
import Examplebox from './layout/Examplebox';

import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

const Example = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
      <div className="full">
        <Fragment>
          <Examplebox />
        </Fragment>
      </div>
      <Footer></Footer>
    </Fragment>
  );
};

export default Example;
