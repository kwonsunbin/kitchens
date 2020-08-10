import React from 'react';
import { Link } from 'react-router-dom';
const Gallerypostbox2 = () => {
  return (
    <div className="gallerymainbox">
      <div className="navbar-column">
        <h2>꾸밈 사례</h2>
        <ul>
          <li>
            <Link to="./gallery">주방</Link>
          </li>
          <li>
            <Link to="./gallery.html">거실</Link>
          </li>
          <li>
            <Link to="./gallery.html">화장실</Link>
          </li>
        </ul>
      </div>

      <div className="gallerypostbox">
        <div className="gallerypostheader">
          <h1>아름다운 주방</h1>
        </div>
        <div className="gallerypostmain">
          <h1>내용</h1>
        </div>
        <div className="listbutton">
          <Link to="gallery.html">목록으로</Link>
        </div>
      </div>
    </div>
  );
};

export default Gallerypostbox2;
