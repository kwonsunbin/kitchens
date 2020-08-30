import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-elastic-carousel';
import uuid from 'uuid';
import Hidden from '@material-ui/core/Hidden';

class Mainbox1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainPhoto: [{ path: [''] }, { path: [''] }, { path: [''] }],
    };
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: '/api/v1/photos?kind=라&limit=10',
    }).then((res) => {
      this.setState({ mainPhoto: res.data.data });
    });
  }

  render() {
    const breakPoints = [
      { width: 1, itemsToShow: 1 },

      { width: 600, itemsToShow: 1 },
      { width: 1200, itemsToShow: 1 },
    ];
    return (
      <Fragment>
        <Hidden smDown>
          <Grid container className="mainbox1">
            <Grid item xs={12}>
              <Carousel breakPoints={breakPoints}>
                {this.state.mainPhoto.map((product) => (
                  <Link
                    to={`./Imgslide/${product._id}`}
                    className="linkimage"
                    key={uuid()}
                  >
                    <div className="slidebox">
                      <img
                        src={`./uploads/${product.path[0]}`}
                        alt="photos"
                        width="100%"
                        height="100%"
                        padding="0.2vw"
                      ></img>
                    </div>
                  </Link>
                ))}
              </Carousel>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid container className="mainbox1small">
            <Grid item xs={12}>
              <Carousel breakPoints={breakPoints}>
                {this.state.mainPhoto.map((product) => (
                  <Link
                    to={`./Imgslide/${product._id}`}
                    className="linkimage"
                    key={uuid()}
                  >
                    <div>
                      <img
                        src={`./uploads/${product.path[0]}`}
                        alt="photos"
                        width="100%"
                        height="100%"
                        padding="0.2vw"
                      ></img>
                    </div>
                  </Link>
                ))}
              </Carousel>
            </Grid>
          </Grid>
        </Hidden>
      </Fragment>
    );
  }
}

export default Mainbox1;
