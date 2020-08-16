import React, { Fragment, Component } from 'react';
import Draftbox from './layout/Draftbox';
import axios from 'axios';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

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
        <Navbar />
        <div className="full">
          <div className="background">
            <Draftbox onCreate={this.handleCreate} />
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default Draft;
