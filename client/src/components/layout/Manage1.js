import React, { Component, Fragment } from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';

class Manage1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authorName: '',
      password: '',
      title: '',
      content: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    confirmAlert({
      title: 'Confirm',
      message: '모든 항목을 정확히 기재하셨나요?',
      buttons: [
        {
          label: '네',
          onClick: () => {
            this.props.onCreate(this.state);

            this.setState({
              authorName: '',
              phone: '',
              email: '',
              title: '',
              content: '',
              agreement: '',
            });
          },
        },
        {
          label: '아니오',
          onClick: () => {
            return;
          },
        },
      ],
    });
  }
  render() {
    return (
      <Fragment>
        <form className="manage-notice">
          <input
            placeholder="이름"
            value={this.state.authorName}
            onChange={this.handleChange}
            id="authorName"
          ></input>

          <input
            placeholder="제목"
            value={this.state.title}
            onChange={this.handleChange}
            id="title"
          />

          <textarea
            placeholder="공지내용"
            value={this.state.content}
            onChange={this.handleChange}
            id="content"
          />
          <button onClick={this.handleSubmit}>작성하기</button>
        </form>
      </Fragment>
    );
  }
}

export default Manage1;
