import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';

class Gallerypost extends Component {
  render() {
    return (
      <Fragment>
        <Link to="../gallery">
          <div>
            <i className="fas fa-arrow-left"></i>
          </div>
        </Link>
        <div className="imgshow">
          <img
            src={
              process.env.PUBLIC_URL + '/uploads/' + this.props.match.params.id
            }
            alt="photos"
            className="imgshow"
          ></img>
        </div>
      </Fragment>
    );
  }
}

export default Gallerypost;
