import React, { Fragment, Component } from 'react';
import Noticepostbox1 from './layout/Noticepostbox1';
import Noticepostbox2 from './layout/Noticepostbox2';
import axios from 'axios';

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
        <Noticepostbox1 />
        <Noticepostbox2 content={this.state.content} />
      </Fragment>
    );
  }
}

export default Noticepost;
