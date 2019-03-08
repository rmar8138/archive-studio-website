import React, { Component } from 'react';
import OurEyeGridTemplate from '../components/grids/OurEyeGrid';

export class OurEye extends Component {
  render() {
    const images = [];
    for (let i = 0; i < 20; i++) {
      images.push(i + 1);
    }
    return (
      <div>
        <OurEyeGridTemplate>
          {images.map((key) => {
            if (key !== 6) {
              // file 6 is a video, so do not use img tag
              return (
                <img
                  src={`/static/oureye/images/${key}.jpg`}
                  alt={`Our Eye ${key}`}
                />
              );
            } else {
              return (
                <video
                  autoplay
                  playsinline
                  src={`/static/oureye/images/${key}.mp4`}
                >
                  Video is not supported.
                </video>
              );
            }
          })}
        </OurEyeGridTemplate>
      </div>
    );
  }
}

export default OurEye;
