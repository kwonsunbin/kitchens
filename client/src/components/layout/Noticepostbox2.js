import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Noticepostbox2 extends Component {
  render() {
    return (
      <Fragment>
        <div className="postcontentmainbox">
          <div className="navbar-column">
            <h2>고객지원</h2>
            <ul>
              <Link to="./bulletin">공지사항</Link>
            </ul>
          </div>

          <div className="contentbox">
            <p className="idx">제목</p>
            <p>{this.props.content.title}</p>
            <p className="idx">작성자</p>
            <p>{this.props.content.authorName}</p>
            <p className="idx">작성일시</p>
            <p>{this.props.content.timestamp}</p>
            <p className="idx">내용</p>
            <p>{this.props.content.content}</p>
          </div>
        </div>
        <Link to="./notice" id="noticebacklink">
          목록으로
        </Link>
      </Fragment>
    );
  }
}

export default Noticepostbox2;
