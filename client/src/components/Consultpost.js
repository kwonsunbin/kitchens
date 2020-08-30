import React, { Component, Fragment } from 'react';
import Consultpostbox from './layout/Consultpostbox';
import axios from 'axios';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Fixedad from './Fixedad';

class Consultpost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {
        content: '',
        password: '',
        title: '',
      },
    };
  }

  componentDidMount() {
    axios
      .get(`/api/v1/requests/${this.props.match.params.id}`)
      .then((response) => {
        this.setState({ content: response.data.data });
      });
  }

  render() {
    return (
      <Fragment>
        <Navbar></Navbar>
        <div className="full">
          <Consultpostbox content={this.state.content} />
        </div>
        <Footer></Footer>
        <Fixedad></Fixedad>
      </Fragment>
    );
  }
}

export default Consultpost;
