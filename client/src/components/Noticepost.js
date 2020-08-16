import React, { Component, Fragment } from 'react';
import Noticepostbox from './layout/Noticepostbox';
import axios from 'axios';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

class Noticepost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {
        agreement: '',
        authorName: '',
        clicked: 0,
        content: '',
        createdAt: '',
        email: '',
        id: '',
        password: '',
        phone: '',
        title: '',
      },
    };
  }

  componentDidMount() {
    axios
      .get(`/api/v1/notices/${this.props.match.params.id}`)
      .then((response) => {
        this.setState({ content: response.data.data });
      });
  }

  render() {
    return (
      <Fragment>
        <Navbar></Navbar>
        <div className="full">
          <Noticepostbox content={this.state.content} />
        </div>
        <Footer></Footer>
      </Fragment>
    );
  }
}

export default Noticepost;
