import React, { Component } from 'react';
import Manage1 from './layout/Manage1';
import Manage2 from './layout/Manage2';
import Manage3 from './layout/Manage3';
import Manage4 from './layout/Manage4';
import Manage5 from './layout/Manage5.js';
import Grid from '@material-ui/core/Grid';
import swal from 'sweetalert';

import axios from 'axios';

class Manage extends Component {
  constructor(props) {
    super(props);
    this.handleCreateNotice = this.handleCreateNotice.bind(this);
    this.handleCreatePhoto = this.handleCreatePhoto.bind(this);
  }

  handleCreateNotice(data) {
    axios({
      method: 'post',
      url: '/api/v1/notices',
      data: data,
    })
      .then((res) => {
        if (res.status === 201) {
          swal('등록되었습니다');
        }
      })
      .catch(function (error) {
        if (error.response.status === 403) {
          swal('로그인 해주세요');
        } else {
          swal('모든 항목을 채워주세요');
        }
      });
  }

  handleCreatePhoto(data) {
    axios({
      method: 'post',
      url: '/api/v1/photos',
      data: data,
    })
      .then((res) => {
        if (res.status === 201) {
          swal('등록되었습니다');
        }
      })
      .catch(function (error) {
        if (error.response.status === 403) {
          swal('로그인 해주세요');
        } else {
          swal('모든 항목을 채워주세요');
        }
      });
  }

  render() {
    return (
      <div className="full">
        <Grid container className="pagebox">
          <div className="managebox">
            <h1>공지 작성</h1>
            <Manage1 onCreate={this.handleCreateNotice} />
            <h1>공지 삭제</h1>
            <Manage4 />
            <h1>제품 소개, 시공 사례 올리기</h1>
            <Manage2 onCreate={this.handleCreatePhoto} />
            <h1>제품 소개, 시공 사례 지우기</h1>
            <Manage5 />
            <h1>상담 및 문의 확인</h1>
            <Manage3 />
          </div>
        </Grid>
      </div>
    );
  }
}
export default Manage;
