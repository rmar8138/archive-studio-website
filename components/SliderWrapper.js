import React, { Component } from 'react';
import { OurVisionImage } from './layouts/OurVisionPageLayout';

export class SliderWrapper extends Component {
  componentDidMount = () => {
    window.addEventListener('resize', this.onWindowResized);
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.onWindowResized);
  };

  onWindowResized = () => {
    // Debouncing using underscore _.debounce is optionnal
    this.forceUpdate();
  };
  render() {
    return <OurVisionImage>{this.props.children}</OurVisionImage>;
  }
}

export default SliderWrapper;
