import React, { Component } from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';

class Draftbox2form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorName: '',
      phone: '',
      email: '',
      title: '',
      content: '',
      agreement: '',
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
      message: '모든 항목을 정확히 기재하셨나요?',
      buttons: [
        {
          label: '네',
          onClick: () => {
            this.props.onCreate(this.state);

            this.setState({
              authorName: '',
              phone: '',
              email: '',
              title: '',
              content: '',
              agreement: '',
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
      <form onSubmit={this.handleSubmit}>
        <div className="h2box">
          <h2>상담 및 문의</h2>
        </div>

        <input
          placeholder="이름"
          value={this.state.authorName}
          onChange={this.handleChange}
          id="authorName"
        />

        <input
          placeholder="휴대폰 번호"
          value={this.state.phone}
          onChange={this.handleChange}
          id="phone"
        />

        <input
          placeholder="이메일"
          value={this.state.email}
          onChange={this.handleChange}
          id="email"
        />

        <input
          placeholder="제목"
          value={this.state.title}
          onChange={this.handleChange}
          id="title"
        />

        <textarea
          placeholder="문의내용"
          value={this.state.content}
          onChange={this.handleChange}
          id="content"
          className="longinput"
        />

        <div className="agreementbox">
          <p>
            키친스는 고객의 개인정보를 아래와 같은 목적으로 수집·이용합니다.
            회사는 고객으로 부터 제공 받은 개인정보를 아래의 목적 이외로는
            사용하지 않으며, 만약 이용 목적을 변경하거나 이용 목적 범위를
            초과하여 이용하고자 할 때에는 고객으로부터 별도로 사전 동의를 얻을
            것입니다. 문의에 따른 답변 전달의 용도 및 기타 고객의 요구에 따른
            안내 사항 고지, 등 각 업체의 상황에 맞게 개인정보 수집·이용의 모든
            내용 작성과 같은 목적으로 수집·이용합니다. 회사는 이용자의
            개인정보를 원칙적으로 개인정보의 수집 및 이용목적이 달성되면
            지체없이 파기됩니다.
          </p>
          <div className="agreementcheckbox">
            <label htmlFor="agreement">동의합니다</label>
            <input
              type="checkbox"
              id="agreement"
              className="checkbox"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div></div>
        <button className="submit-button" type="submit">
          작성하기
        </button>
      </form>
    );
  }
}

export default Draftbox2form;
