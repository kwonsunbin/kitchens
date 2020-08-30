import React, { Fragment, Component } from 'react';
import Updatereqbox from './layout/Updatereqbox';
import axios from 'axios';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import swal from 'sweetalert';
import Fixedad from './Fixedad';

class Draft extends Component {
  constructor(props) {
    super(props);
    this.handleCreate = this.handleCreate.bind(this);
  }

  async handleCreate(data) {
    let pw = '';
    await axios
      .get(`/api/v1/requests/${this.props.history.location.state.id}`)
      .then((res) => {
        pw = res.data.data.password;
      });

    if (data.password === pw) {
      axios({
        method: 'put',
        url: `/api/v1/requests/${this.props.history.location.state.id}`,
        data: data,
      })
        .then((res) => {
          console.log(res);
          if (res.status === 201) {
            swal('수정되었습니다');
          }
        })
        .catch(function (error) {
          if (error.response) {
            swal('모든 항목을 채워주세요');
          }
        });
    } else {
      swal('게시글 비밀번호를 확인해주세요');
    }
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="full">
          <div className="background">
            <Updatereqbox onCreate={this.handleCreate} />
          </div>
        </div>
        <Footer />
        <Fixedad></Fixedad>
      </Fragment>
    );
  }
}

export default Draft;
