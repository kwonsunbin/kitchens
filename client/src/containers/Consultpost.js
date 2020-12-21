import React, { Component, Fragment } from 'react';
import Consultpostbox from '../components/consult/Consultpostbox';
import axios from 'axios';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Fixedad from '../components/Fixedad';

class Consultpost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {
        content: '',
        password: '',
        title: '',
        _id: '',
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
          <Consultpostbox
            content={this.state.content}
            isLoggedIn={this.props.isLoggedIn}
          />
        </div>
        <Footer></Footer>
        <Fixedad></Fixedad>
      </Fragment>
    );
  }
}

export default Consultpost;
