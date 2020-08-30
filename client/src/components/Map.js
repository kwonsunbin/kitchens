import React, { Fragment } from 'react';
import Mapbox from './layout/Mapbox';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Fixedad from './Fixedad';

const Map = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
      <div className="full">
        <Mapbox />
      </div>
      <Footer></Footer>
      <Fixedad></Fixedad>
    </Fragment>
  );
};

export default Map;
