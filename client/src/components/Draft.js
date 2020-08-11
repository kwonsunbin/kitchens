import React, { Fragment, Component } from 'react';
import Draftbox1 from './layout/Draftbox1';
import Draftbox2 from './layout/Draftbox2';
import axios from 'axios';

class Draft extends Component {
  constructor(props) {
    super(props);
    this.handleCreate = this.handleCreate.bind(this);
  }

  handleCreate(data) {
    axios({
      method: 'post',
      url: '/api/v1/requests',
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
        <Draftbox1 />
        <div className="background">
          <Draftbox2 onCreate={this.handleCreate} />
        </div>
      </Fragment>
    );
  }
}

export default Draft;
