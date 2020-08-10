import React, { Component } from 'react';
import Draftbox2form from './Draftbox2form';

class Draftbox2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorName: '',
      phone: '',
      email: '',
      title: '',
      content: '',
      agreement: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <div className="draftbox">
        <Draftbox2form onCreate={this.props.onCreate} />
      </div>
    );
  }
}

export default Draftbox2;
