import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import swal from 'sweetalert';

class Manage6 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requestsid: '',
      answer: '',
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
      message: '답변 등록하시겠습니까?',
      buttons: [
        {
          label: '네',
          onClick: () => {
            console.log(this.state.requestsid);

            axios({
              method: 'put',
              url: `/api/v1/requests/${this.state.requestsid}`,
              data: { answer: `${this.state.answer}` },
            })
              .then((res) => {
                if (res.status === 200) {
                  swal('등록되었습니다');
                }
              })
              .catch(function (error) {
                if (error.response.status === 403) {
                  swal('로그인 해주세요');
                } else if (error.response) {
                  swal('상담글 id를 확인해주세요');
                }
              });
            this.setState({
              requestsid: '',
              answer: '',
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
        <form className="managebox6">
          <input
            placeholder="상담글 id 붙여넣기"
            value={this.state.requestsid}
            onChange={this.handleChange}
            id="requestsid"
          ></input>
          <textarea
            placeholder="답변"
            value={this.state.answer}
            onChange={this.handleChange}
            id="answer"
          ></textarea>
          <button onClick={this.handleSubmit}>답변 등록하기</button>
        </form>
      </Fragment>
    );
  }
}

export default Manage6;
