import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

class Gallerypost extends Component {
  render() {
    return (
      <Fragment>
        <Hidden smDown>
          <div className="full">
            <Grid container>
              <Grid container item xs={12}>
                <Link to="../gallery">
                  <div className="arrow">
                    <i className="fas fa-arrow-left"></i> 갤러리 가기
                  </div>
                </Link>
                <Grid item xs={12}>
                  <div className="imgshow">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        '/uploads/' +
                        this.props.match.params.id
                      }
                      height="100%"
                      width="100%"
                      alt="photos"
                      className="imgshow"
                    ></img>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Hidden>
        <Hidden mdUP>
          <div className="full">
            <Grid container className="smallgp">
              <Grid container item xs={12}>
                <Link to="../gallery">
                  <div className="arrow">
                    <i className="fas fa-arrow-left"></i> 갤러리 가기
                  </div>
                </Link>
                <Grid item xs={12}>
                  <div className="imgshow">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        '/uploads/' +
                        this.props.match.params.id
                      }
                      height="100%"
                      width="100%"
                      alt="photos"
                      className="imgshow"
                    ></img>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Hidden>
      </Fragment>
    );
  }
}

export default Gallerypost;
