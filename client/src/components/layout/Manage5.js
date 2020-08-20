import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import swal from 'sweetalert';

class Manage5 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoid: '',
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
      message: '정말 삭제하시겠습니까?',
      buttons: [
        {
          label: '네',
          onClick: () => {
            axios
              .delete(`/api/v1/photos/${this.state.photoid}`)
              .then((res) => {
                if (res.status === 200) {
                  swal('삭제되었습니다');
                }
              })
              .catch(function (error) {
                if (error.response.status === 403) {
                  swal('로그인 해주세요');
                } else if (error.response) {
                  swal('사진 id를 확인해주세요');
                }
              });
            this.setState({
              photoid: '',
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
        <form className="manage-notice2">
          <input
            placeholder="id 붙여넣기"
            value={this.state.photoid}
            onChange={this.handleChange}
            id="photoid"
          ></input>
          <button onClick={this.handleSubmit}>삭제하기</button>
        </form>
      </Fragment>
    );
  }
}

export default Manage5;
