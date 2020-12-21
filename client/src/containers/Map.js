import React, { Fragment } from 'react';
import Mapbox from '../components/map/Mapbox';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Fixedad from '../components/Fixedad';

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
