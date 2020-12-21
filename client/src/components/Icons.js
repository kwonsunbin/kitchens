import React, { Component, Fragment } from 'react';
import Hidden from '@material-ui/core/Hidden';

class Icons extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }
  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    return (
      <Fragment>
        <Hidden smDown>
          <img
            src={this.props.path}
            height="50px"
            width="50px"
            alt="icons"
            className={this.props.kind}
            onClick={window.open(this.props.link)}
            onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}
          />
          {this.state.isHovering && (
            <div className="exbox">{this.props.ex}</div>
          )}
        </Hidden>
        <Hidden mdUp>
          <img
            src={this.props.path}
            height="50px"
            width="50px"
            alt="icons"
            className={this.props.kind}
            onClick={window.open(`&{this.props.link}`)}
            onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}
          />
          {this.state.isHovering && (
            <div className="exboxsmall">{this.props.ex}</div>
          )}
        </Hidden>
      </Fragment>
    );
  }
}

export default Icons;
