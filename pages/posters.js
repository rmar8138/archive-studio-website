import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import {
  OurVisionPageLayout,
  OurVisionMain,
  OurVisionText,
  OurVisionImage,
} from '../components/layouts/OurVisionPageLayout';

export class posters extends Component {
  render() {
    const images = [];
    for (let i = 0; i < 4; i++) {
      images.push(i);
    }
    return (
      <div>
        <OurVisionPageLayout>
          <OurVisionMain>
            <OurVisionText>
              <h1>Poster Experiments</h1>
              <p>
                As an exercise to explore different graphic design and artistic
                techniques, our poster experiments are an ongoing inhouse
                project. They have become quick meditations through which we
                practice a sense of intuition towards our process.
              </p>
            </OurVisionText>
            <OurVisionImage>
              <Carousel
                renderCenterLeftControls={({ previousSlide }) => (
                  <button
                    onClick={previousSlide}
                    style={{
                      opacity: '0',
                      outline: 'none',
                    }}
                  />
                )}
                renderCenterRightControls={({ nextSlide }) => (
                  <button
                    onClick={nextSlide}
                    style={{
                      opacity: '0',
                      outline: 'none',
                    }}
                  />
                )}
              >
                {images.map((key) => (
                  <img
                    src={`static/ourvision/posters/${key + 1}.jpg`}
                    alt={`Posters ${key + 1}`}
                    key={key}
                  />
                ))}
              </Carousel>
            </OurVisionImage>
          </OurVisionMain>
        </OurVisionPageLayout>
      </div>
    );
  }
}

export default posters;
