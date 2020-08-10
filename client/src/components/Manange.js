import React, { Component, Fragment } from 'react';
import Manage1 from './layout/Manage1';
import Manage2 from './layout/Manage2';
import Manage3 from './layout/Manage3';
import Manage4 from './layout/Manage4';
import Manage5 from './layout/Manage5.js';
import axios from 'axios';

class Manage extends Component {
  constructor(props) {
    super(props);
    this.handleCreate = this.handleCreate.bind(this);
  }

  handleCreate(data) {
    axios({
      method: 'post',
      url: 'http://localhost:8080/api/v1/notices',
      data: data,
    })
      .then((res) => {
        if (res.status === 201) {
          alert('등록되었습니다');
        }
      })
      .catch(function (error) {
        if (error.response) {
          alert('모든 항목을 채워주세요');
        } else {
          alert('에러!');
        }
      });
  }

  render() {
    return (
      <Fragment>
        <div className="mainbox1">
          <div className="mainphoto">
            <img src="./bookcase2.jpg" alt="bookcase2" />
          </div>
        </div>
        <div className="managebox">
          <h1>공지 작성</h1>
          <Manage1 onCreate={this.handleCreate} />
          <h1>공지 삭제</h1>
          <Manage4 />
          <h1>갤러리 사진 올리기</h1>
          <Manage2 />
          <h1>갤러리 사진 지우기</h1>
          <Manage5 />
          <h1>상담 및 문의 확인</h1>
          <Manage3 />
        </div>
      </Fragment>
    );
  }
}
export default Manage;
