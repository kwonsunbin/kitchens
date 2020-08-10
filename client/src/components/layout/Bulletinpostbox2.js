import React from 'react';
import { Link } from 'react-router-dom';

const Bulltinpostbox2 = () => {
  return (
    <div className="postcontentmainbox">
      <div className="navbar-column">
        <h2>게시판</h2>
        <ul>
          <Link to="./bulletin">견적 상담 게시판</Link>
          <Link to="./bulletin.html">후기 게시판</Link>
        </ul>
      </div>

      <div className="contentbox">
        <div className="contentboxheader">
          <h1>제목</h1>
        </div>
        <div className="contentboxmain">
          <p>내용</p>
        </div>
        <div className="listbutton">
          <Link to="./bulletin.html">목록으로</Link>
        </div>
      </div>
    </div>
  );
};

export default Bulltinpostbox2;
