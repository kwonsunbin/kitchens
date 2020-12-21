import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import uuid from 'uuid';
class Mainbox7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      examples: [{ imgPaths: [''] }, { imgPaths: [''] }, { imgPaths: [''] }],
    };
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: '/api/v1/photos?kind=라&limit=8',
    }).then((res) => {
      this.setState({ examples: res.data.data });
    });
  }

  render() {
    return (
      <Fragment>
        <Hidden smDown>
          <Grid container className="mainbox7">
            <Grid item xs={12} align="center">
              <h1>실제 시공 사례</h1>
              <p>키친스가 직접 시공한 결과물입니다.</p>
            </Grid>
            <Grid item xs={11}></Grid>
            <Grid item xs={1}>
              <Link to="./example" className="magni">
                <i className="fas fa-search-plus"></i>&nbsp; 더보기
              </Link>
            </Grid>
            <Grid>&nbsp;</Grid>

            <Grid container item xs={12}>
              {this.state.examples.map((example) => (
                <Grid container item xs={3} align="center" key={uuid()}>
                  <Link to={`./Imgslide/${example._id}`} className="linkimage">
                    <Grid item xs={12}>
                      <img
                        src={`../uploads/${example.imgPaths[0]}`}
                        alt="photos"
                        width="90%"
                        height="90%"
                      ></img>
                    </Grid>
                    <Grid item xs={12} align="center">
                      {example.title}
                    </Grid>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid container className="mainbox7small">
            <Grid
              style={{
                padding: '5vw',
                borderBottom: 'solid 0.02vw #f6f6f6',
              }}
              item
              xs={12}
              align="center"
            >
              <h1>실제 시공 사례</h1>
              <p>키친스가 직접 시공한 결과물입니다.</p>
            </Grid>
            <Grid item xs={12}>
              &nbsp;
            </Grid>

            <Grid container item xs={12}>
              {this.state.examples.map((example) => (
                <Grid container item xs={6} align="center" key={uuid()}>
                  <Link to={`./Imgslide/${example._id}`} className="linkimage">
                    <Grid item xs={12}>
                      <img
                        src={`../uploads/${example.imgPaths[0]}`}
                        alt="photos"
                        width="90%"
                        height="90%"
                      ></img>
                    </Grid>
                    <Grid item xs={12} align="center">
                      {example.title}
                    </Grid>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Hidden>
      </Fragment>
    );
  }
}

export default Mainbox7;
