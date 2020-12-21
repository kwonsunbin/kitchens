import React, { Component, Fragment } from 'react';
import Noticepostbox from '../components/notice/Noticepostbox';
import axios from 'axios';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Fixedad from '../components/Fixedad';

class Noticepost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {
        authorName: '',
        content: '',
        title: '',
        imgPath: '',
        _id: '',
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
          <Noticepostbox
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

export default Noticepost;
