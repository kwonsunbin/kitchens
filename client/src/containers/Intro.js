import React, { Fragment } from 'react';
import Introbox from '../components/intro/Introbox';

import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Fixedad from '../components/Fixedad';

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
      <Fixedad></Fixedad>
    </Fragment>
  );
};

export default intro;
