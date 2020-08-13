import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import uuid from 'uuid';
import Grid from '@material-ui/core/Grid';

class Gallerybox2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: '/api/v1/photos/getfs',
    }).then((res) => {
      this.setState({ files: res.data.data });
    });
  }

  render() {
    const files = this.state.files;

    const parts = files.map((f) => {
      return (
        <Link to={'./gallerypost/' + f} className="productbox" key={uuid()}>
          <img src={'./uploads/' + f} alt="photos" width="100%" />
        </Link>
      );
    });

    return (
      <Grid container className="pagebox">
        <Grid container item xs={2} className="navbar-column">
          <Grid item xs={12} align="center">
            <h2>꾸밈 사례</h2>
          </Grid>
        </Grid>

        <Grid container item xs={10} className="photobox">
          <Grid item>
            <h1>갤러리</h1>
          </Grid>
          <Grid className="photoboxmain">{parts}</Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Gallerybox2;
