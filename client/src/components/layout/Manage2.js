import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { confirmAlert } from 'react-confirm-alert'; // Import

class Manage2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      title: '',
      desc: '',
      kind: '',
    };
    this.handleFileInput = this.handleFileInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFileInput(e) {
    console.log(e.target.files);
    this.setState({
      selectedFile: e.target.files,
    });
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
            var formData = new FormData();
            if (
              !this.state.selectedFile ||
              !this.state.title ||
              !this.state.desc ||
              !this.state.kind
            ) {
              swal('빠짐없이 입력해주세요');
              return;
            }
            for (var i = 0; i < this.state.selectedFile.length; i++) {
              formData.append(`files`, this.state.selectedFile[i]);
            }
            formData.append('title', this.state.title);
            formData.append('desc', this.state.desc);
            formData.append('kind', this.state.kind);
            formData.append('price', this.state.price);

            axios({
              method: 'post',
              url: '/api/v1/photos',
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

            this.setState({
              title: '',
              desc: '',
              kind: '',
              selectedFile: null,
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
      <form encType="multipart/form-data" className="manage-photo">
        <input
          type="file"
          name="file"
          multiple
          onChange={this.handleFileInput}
          ref="file"
        />

        <input
          placeholder="제목"
          value={this.state.title}
          onChange={this.handleChange}
          id="title"
        />

        <textarea
          placeholder="공사 금액 : 12,000,000
          공사 기간 : 2주
          공사 구분 : 28평형 아파트 행 구분해서 입력!"
          value={this.state.desc}
          onChange={this.handleChange}
          id="desc"
        />

        <input
          placeholder="종류 ( 키친,싱크대 = 가, 인테리어 = 나, 주문제작가구 = 다, 시공사례 = 라)"
          value={this.state.kind}
          onChange={this.handleChange}
          id="kind"
        />

        <button type="button" onClick={this.handleSubmit}>
          submit
        </button>
      </form>
    );
  }
}

export default Manage2;
