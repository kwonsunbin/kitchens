import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import axios from 'axios';

import ImageGallery from 'react-image-gallery';
class Imgslide extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [], title: '', desc: '' };
  }

  componentDidMount() {
    axios.get(`/api/v1/photos/${this.props.match.params.id}`).then((req) => {
      let images = req.data.data.path.map((p) => {
        return {
          original: `../uploads/${p}`,
          thumbnail: `../uploads/${p}`,
        };
      });
      let title = req.data.data.title;
      let desc = req.data.data.desc;
      this.setState({ images: images, title: title, desc: desc });
    });
  }
  render() {
    return (
      <Fragment>
        <Hidden smDown>
          <Grid container alignItems="center">
            <Grid>&nbsp;</Grid>
            <Grid>
              <p className="back" onClick={this.props.history.goBack}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i className="fas fa-arrow-left"></i>
              </p>
              <div className="picinfo">
                <h2>{this.state.title}</h2>
                <pre>{this.state.desc}</pre>
              </div>
            </Grid>
            <Grid item xs={12}>
              <ImageGallery items={this.state.images} />
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid container alignItems="center">
            <Grid>
              <div className="backsmall" onClick={this.props.history.goBack}>
                <i className="fas fa-arrow-left"></i>
              </div>
              <div className="picinfosmall">
                <h2>{this.state.title}</h2>
                <pre>{this.state.desc}</pre>
              </div>
            </Grid>
            <Grid>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
            </Grid>
            <Grid item xs={12}>
              <ImageGallery items={this.state.images} />
            </Grid>
          </Grid>
        </Hidden>
      </Fragment>
    );
  }
}

export default Imgslide;
