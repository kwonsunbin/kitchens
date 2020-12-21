import React, { Fragment, Component } from 'react';
import Productbox1 from '../components/product/Productbox1';
import Productbox2 from '../components/product/Productbox2';
import Productbox3 from '../components/product/Productbox3';

import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Fixedad from '../components/Fixedad';

class Product extends Component {
  render() {
    const { id } = this.props.match.params;
    let product;
    if (id === '1') {
      product = <Productbox1 isLoggedIn={this.props.isLoggedIn} />;
    } else if (id === '2') {
      product = <Productbox2 isLoggedIn={this.props.isLoggedIn} />;
    } else if (id === '3') {
      product = <Productbox3 isLoggedIn={this.props.isLoggedIn} />;
    }
    return (
      <Fragment>
        <Navbar></Navbar>
        <div className="full">
          <Fragment>{product}</Fragment>
        </div>
        <Footer></Footer>
        <Fixedad></Fixedad>
      </Fragment>
    );
  }
}

export default Product;
