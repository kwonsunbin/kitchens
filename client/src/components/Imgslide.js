import React, { Component } from 'react';

import axios from 'axios';

import ImageGallery from 'react-image-gallery';

class Imgslide extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  componentDidMount() {
    axios.get(`/api/v1/photos/${this.props.match.params.id}`).then((req) => {
      console.log(req);
      let images = req.data.data.path.map((p) => {
        return {
          original: `../uploads/${p}`,
          thumbnail: `../uploads/${p}`,
        };
      });
      this.setState({ images: images });
    });
  }
  render() {
    return <ImageGallery items={this.state.images} />;
  }
}

export default Imgslide;
