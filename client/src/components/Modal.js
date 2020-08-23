import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = { hidden: false };
    this.handleHidden = this.handleHidden.bind(this);
  }

  handleHidden() {
    this.setState({ hidden: true });
  }

  render() {
    if (this.props.ad === 'yes' && this.state.hidden === false) {
      return (
        <Fragment>
          <Hidden smDown>
            <div className="Modal-overlay" />
            <div className="Modal">
              <p className="title">이벤트</p>
              <div className="content">
                <p>이벤트 중이에요~</p>
              </div>
              <div className="button-wrap">
                <button className="one">
                  <Link to="./notice">이벤트 공지 보러가기</Link>
                </button>
                <button
                  className="one"
                  onClick={() => {
                    this.props.setCookie();
                    this.handleHidden();
                  }}
                >
                  오늘 동안 보지 않기
                </button>
                <button className="two" onClick={this.handleHidden}>
                  닫기
                </button>
              </div>
            </div>
          </Hidden>
          <Hidden mdUp>
            <div className="Modal-overlay" />
            <div className="Modalsmall">
              <p className="title">이벤트</p>
              <div className="content">
                <p>이벤트 중이에요~</p>
              </div>
              <div className="button-wrap">
                <button className="one">
                  <Link to="./notice">이벤트 공지 보러가기</Link>
                </button>
                <button
                  className="one"
                  onClick={() => {
                    this.props.setCookie();
                    this.handleHidden();
                  }}
                >
                  오늘 동안 보지 않기
                </button>
                <button className="two" onClick={this.handleHidden}>
                  닫기
                </button>
              </div>
            </div>
          </Hidden>
        </Fragment>
      );
    }

    return <Fragment></Fragment>;
  }
}

export default Modal;
