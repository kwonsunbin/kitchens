import React, { Fragment, Component } from 'react';
import Noticepostbox from './layout/Noticepostbox';
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
        <Noticepostbox content={this.state.content} />
      </Fragment>
    );
  }
}

export default Noticepost;
