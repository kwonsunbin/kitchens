import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

class Gallerypost extends Component {
  render() {
    return (
      <Grid container>
        <Grid container item xs={12}>
          <Link to="../gallery">
            <div>
              <i className="fas fa-arrow-left"></i>
            </div>
          </Link>
          <Grid item>
            <div className="imgshow">
              <img
                src={
                  process.env.PUBLIC_URL +
                  '/uploads/' +
                  this.props.match.params.id
                }
                alt="photos"
                className="imgshow"
              ></img>
            </div>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Gallerypost;
