import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

class Manage2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
    };
    this.handleFileInput = this.handleFileInput.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }

  handleFileInput(e) {
    this.setState({
      selectedFile: e.target.files[0],
    });
  }

  handlePost() {
    var formData = new FormData();
    formData.append('file', this.state.selectedFile);
    if (!this.state.selectedFile) {
      swal('사진을 선택해주세요');
      return;
    }
    axios({
      method: 'post',
      url: '/api/v1/photos/upload',
      data: formData,
    })
      .then((res) => {
        if (res.status === 200) {
          swal('등록되었습니다!');
        }
      })
      .catch(function (error) {
        if (error.response.status === 403) {
          swal('로그인 해주세요');
        } else if (error.response) {
          swal('사진 id를 확인해주세요');
        }
      });
    this.refs.file.value = '';
    this.setState({ selectedFile: null });
  }

  render() {
    return (
      <form encType="multipart/form-data" className="manage-photo">
        <input
          type="file"
          name="file"
          onChange={this.handleFileInput}
          ref="file"
        />
        <button type="button" onClick={this.handlePost}>
          submit
        </button>
      </form>
    );
  }
}

export default Manage2;
