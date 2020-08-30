import React, { Fragment } from 'react';
import Examplebox from './layout/Examplebox';

import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Fixedad from './Fixedad';

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
      <Fixedad></Fixedad>
    </Fragment>
  );
};

export default Example;
