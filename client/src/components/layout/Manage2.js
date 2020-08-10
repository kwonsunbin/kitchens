import React, { Component } from 'react';
import axios from 'axios';

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
      alert('사진을 선택해주세요');
      return;
    }
    axios({
      method: 'post',
      url: 'http://localhost:8080/api/v1/photos/upload',
      data: formData,
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert('등록되었습니다!');
        }
      })
      .catch(function (error) {
        if (error.response) {
          alert('모든 항목을 채워주세요');
        } else {
          alert('에러!');
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
