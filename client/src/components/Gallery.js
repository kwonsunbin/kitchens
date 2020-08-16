import React, { Component, Fragment } from 'react';
import Gallerybox from './layout/Gallerybox';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

class Gallery extends Component {
  render() {
    return (
      <Fragment>
        <Navbar></Navbar>
        <div className="full">
          <Gallerybox />
        </div>
        <Footer></Footer>
      </Fragment>
    );
  }
}

export default Gallery;
