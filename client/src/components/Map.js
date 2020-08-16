import React, { Fragment } from 'react';
import Mapbox from './layout/Mapbox';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

const Map = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
      <div className="full">
        <Mapbox />
      </div>
      <Footer></Footer>
    </Fragment>
  );
};

export default Map;
