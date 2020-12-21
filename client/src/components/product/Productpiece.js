import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';

class Productpiece extends Component {
  render() {
    return (
      <Fragment>
        <Hidden smDown>
          <Grid container item xs={12} className="productpiece">
            <Grid item xs={6} align="center">
              <Link to={`../Imgslide/${this.props.data._id}`}>
                <img
                  src={`../uploads/${this.props.data.imgPaths[0]}`}
                  alt="hihi"
                  width="100%"
                  height="300vw"
                  className="radius"
                ></img>
              </Link>
            </Grid>
            <Grid container item xs={6}>
              <Link to={`../Imgslide/${this.props.data._id}`}>
                <div className="productbigbox">
                  <Grid item xs={12} className="productdesc">
                    <h2 className="m3">{this.props.data.title}</h2>
                  </Grid>
                  <Grid item xs={12} className="productdesc">
                    {this.props.data.desc}
                  </Grid>
                </div>
              </Link>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid container item xs={12} className="productpiecesmall">
            <Grid item xs={12} align="center">
              <Link to={`../Imgslide/${this.props.data._id}`}>
                <img
                  src={`../uploads/${this.props.data.imgPaths[0]}`}
                  alt="hihi"
                  width="100%"
                  height="100%"
                  className="radius"
                ></img>
              </Link>
            </Grid>
            <Grid container item xs={12}>
              <Link to={`../Imgslide/${this.props.data._id}`}>
                <div className="productbigbox">
                  <Grid item xs={12} className="productdesc">
                    <h2>{this.props.data.title}</h2>
                  </Grid>
                  <Grid item xs={12} className="productdesc">
                    {this.props.data.desc}
                  </Grid>
                </div>
              </Link>
            </Grid>
          </Grid>
        </Hidden>
      </Fragment>
    );
  }
}

export default Productpiece;
