import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
class Dropdown extends Component {
  let;

  render() {
    if (this.props.clicked) {
      return (
        <div className="dropdown" id="dropdown">
          <Link to="../intro">회사소개</Link>
          <Link to="../gallery">갤러리</Link>
          <Link to="../notice">공지사항</Link>
          <Link to="../map">오시는 길</Link>
          <div></div>
          <Link to="../draft">상담 및 문의</Link>
          <div></div>
          <div></div>

          <Fragment></Fragment>
          <Fragment></Fragment>
        </div>
      );
    } else {
      return <Fragment></Fragment>;
    }
  }
}

export default Dropdown;
