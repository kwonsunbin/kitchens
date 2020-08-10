import React from 'react';
import { Link } from 'react-router-dom';

const Bulletinbox2 = () => {
  return (
    <div>
      <div className="postmainbox">
        <div className="navbar-column">
          <h2>게시판</h2>
          <ul>
            <Link to="./bulletin">견적 상담 게시판</Link>
            <Link to="./bulletin">후기 게시판</Link>
          </ul>
        </div>

        <div className="postshowbox">
          <div className="postshowbox-head">
            <h1>?? 게시판</h1>
            <a className="write" href="./draft.html">
              글쓰기
            </a>
          </div>
          <div className="bar">
            <p>번호</p>
            <p>제목</p>
            <p>작성자</p>
            <p>작성일</p>
            <p>조회</p>
          </div>
          <div className="posts">
            <ul>
              <li>
                <Link to="./bulletinpost">
                  <p>1</p>
                  <p>문의드립니다</p>
                  <p>바보</p>
                  <p>2020.08.01</p>
                  <p>3</p>
                </Link>
              </li>
              <li>
                <Link to="./bulletinpost">
                  <p>1</p>
                  <p>문의드립니다</p>
                  <p>바보</p>
                  <p>2020.08.01</p>
                  <p>3</p>
                </Link>
              </li>
              <li>
                <Link to="./bulletinpost">
                  <p>1</p>
                  <p>문의드립니다</p>
                  <p>바보</p>
                  <p>2020.08.01</p>
                  <p>3</p>
                </Link>
              </li>
              <li>
                <Link to="./bulletinpost">
                  <p>1</p>
                  <p>문의드립니다</p>
                  <p>바보</p>
                  <p>2020.08.01</p>
                  <p>3</p>
                </Link>
              </li>
              <li>
                <Link to="./bulletinpost">
                  <p>1</p>
                  <p>문의드립니다</p>
                  <p>바보</p>
                  <p>2020.08.01</p>
                  <p>3</p>
                </Link>
              </li>
              <li>
                <Link to="./bulletinpost">
                  <p>1</p>
                  <p>문의드립니다</p>
                  <p>바보</p>
                  <p>2020.08.01</p>
                  <p>3</p>
                </Link>
              </li>
              <li>
                <Link to="./bulletinpost">
                  <p>1</p>
                  <p>문의드립니다</p>
                  <p>바보</p>
                  <p>2020.08.01</p>
                  <p>3</p>
                </Link>
              </li>
              <li>
                <Link to="./bulletinpost">
                  <p>1</p>
                  <p>문의드립니다</p>
                  <p>바보</p>
                  <p>2020.08.01</p>
                  <p>3</p>
                </Link>
              </li>
              <li>
                <Link to="./bulletinpost">
                  <p>1</p>
                  <p>문의드립니다</p>
                  <p>바보</p>
                  <p>2020.08.01</p>
                  <p>3</p>
                </Link>
              </li>
              <li>
                <Link to="./bulletinpost">
                  <p>1</p>
                  <p>문의드립니다</p>
                  <p>바보</p>
                  <p>2020.08.01</p>
                  <p>3</p>
                </Link>
              </li>
            </ul>
          </div>

          <div className="pagination">
            <button className="pagination-before">이전</button>
            <p>1/10</p>
            <button className="pagination-after">이후</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bulletinbox2;
